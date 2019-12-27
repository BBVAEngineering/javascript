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
		const filename = context.getFilename();

		if (filename.endsWith('route.js') || filename.includes('routes') || filename.includes('mixins')) {
			return {
				'Property[key.name=beforeModel] > FunctionExpression[params.length=1]'(node) {
					checkAbortTransition(context, node.params[0]);
				},
				'Property[key.name=willTransition] > FunctionExpression[params.length=1]'(node) {
					checkAbortTransition(context, node.params[0]);
				},
				'Property[key.name=loading] > FunctionExpression[params.length>=2]'(node) {
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
				},
				'Property[key.name=error] > FunctionExpression[params.length=2]'(node) {
					checkAbortTransition(context, node.params[1]);
				},
				'Property[key.name=resetController] > FunctionExpression[params.length=3]'(node) {
					checkAbortTransition(context, node.params[2]);
				}
			};
		}

		return {};
	}
};
