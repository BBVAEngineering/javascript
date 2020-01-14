'use strict';

function checkAbortTransition(context, transitionArgument) {
	const transitionVariable = context.getScope().set.get(transitionArgument.name);
	const transitionAbortCall = transitionVariable.references.find((ref) =>
		ref.identifier.parent.parent.type === 'CallExpression' && ref.identifier.parent.parent.callee.property.name === 'abort'
	);

	if (transitionAbortCall) {
		context.report({
			node: transitionAbortCall.identifier.parent.parent,
			message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead'
		});
	}
}

function mightBeEmberRouteFile(filename) {
	return filename.endsWith('route.js') || filename.includes('routes') || filename.includes('mixins') || filename.includes('reopens');
}

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: '`transition.abort` can lead to navigation problems if executed on route hooks while the page refreshes',
			recommended: false
		},
		fixable: null,
		schema: [],
	},

	create(context) {
		if (mightBeEmberRouteFile(context.getFilename())) {
			return {
				'Property[key.name=beforeModel] > FunctionExpression[params.length=1]'(node) {
					checkAbortTransition(context, node.params[0]);
				},
				'Property[key.name=model] > FunctionExpression[params.length=2]'(node) {
					checkAbortTransition(context, node.params[1]);
				},
				'Property[key.name=afterModel] > FunctionExpression[params.length=2]'(node) {
					checkAbortTransition(context, node.params[1]);
				},
				'Property[key.name=redirect] > FunctionExpression[params.length=2]'(node) {
					checkAbortTransition(context, node.params[1]);
				}
			};
		}

		return {};
	}
};
