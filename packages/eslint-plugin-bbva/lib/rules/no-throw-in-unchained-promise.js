'use strict';

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Avoid throwing error in unchained promise handlers',
			recommended: false
		},
		fixable: null,
		schema: []
	},

	create(context) {
		return {
			// Matches any `throw` inside a `then` / `catch` that is not assigned to a variable or returned
			[':matches(FunctionDeclaration, ArrowFunctionExpression) > BlockStatement > ' +
			':not(:matches(ReturnStatement, VariableDeclaration, ExpressionStatement[expression.type=AssignmentExpression])) ' +
			'CallExpression:matches([callee.property.name=then], [callee.property.name=catch]) ThrowStatement'](node) {
				context.report({
					node,
					message: 'unchained promise handlers should not throw errors',
				});
			}
		};
	}
};
