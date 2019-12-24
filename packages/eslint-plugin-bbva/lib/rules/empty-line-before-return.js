'use strict';

module.exports = {
	meta: {
		type: 'layout',
		docs: {
			description: 'return statements must be preceded by a blank line, unless it\'s the only content of the block',
			recommended: false
		},
		fixable: 'whitespace',
		schema: [],
	},

	create(context) {
		const source = context.getSourceCode();
		const { lines } = source;

		return {
			'BlockStatement > * + ReturnStatement'(node) {
				const previousLine = lines[node.loc.start.line - 2];

				if (previousLine.trim().length) {
					context.report({
						node,
						message: 'A blank line is needed before a return statement',
						fix(fixer) {
							const previousToken = source.getTokenBefore(node);
							const start = previousToken.range[1] + 1;
							const end = node.range[0] - 1;

							return fixer.insertTextBeforeRange([start, end], '\n');
						}
					});
				}
			}
		};
	}
};
