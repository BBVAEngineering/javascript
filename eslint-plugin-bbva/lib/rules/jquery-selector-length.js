'use strict';

const $_NAMESPACES = ['$', 'jQuery'];

module.exports = {
    meta: {
        docs: {
            description: 'jQuery selector length',
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
		return {
			IfStatement(node) {
				if (node.test && node.test.type === 'CallExpression') {
					const callExpression = node.test;

					if (callExpression.callee && $_NAMESPACES.includes(callExpression.callee.name)) {
						const source = context.getSourceCode();
						const selector = source.getText(callExpression);
						const jQuery = $_NAMESPACES.join('|').replace('$', '\\$');
						const regExp = new RegExp(`^[${jQuery}]\\(['"][^'"]+['"]\\)$`);

						if (selector.match(regExp) && !selector.match(/\.length$/)) {
							context.report(node, 'Selection results should be tested with "length"');
						}
					}
				}
			}
		};
	}
};
