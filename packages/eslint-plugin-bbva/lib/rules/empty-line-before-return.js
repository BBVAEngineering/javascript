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
				const previousToken = source.getTokenBefore(node);
				const startLine = previousToken.loc.end.line;
				const endLine = node.loc.start.line;
				const linesBetween = lines.slice(startLine, endLine);

				if (!linesBetween.some((line) => line.trim().length === 0)) {
					context.report({
						node,
						message: 'A blank line is needed before a return statement',
						fix(fixer) {
							const startRangeIndex = previousToken.range[1] + 1;
							const endRangeIndex = node.range[0] - 1;

							return fixer.insertTextBeforeRange([startRangeIndex, endRangeIndex], '\n');
						}
					});
				}
			}
		};
	}
};
