'use strict';

module.exports = {
	meta: {
		docs: {
			description: 'No arguments reassignment',
			recommended: false
		},
		fixable: null,
		schema: []
	},

	create(context) {
		return {
			AssignmentExpression(node) {
				const left = node.left;

				if (node.operator === '=' && left && left.object && left.object.name === 'arguments') {
					context.report(node, 'Arguments should not be modified');
				}
			}
		};
	}
};
