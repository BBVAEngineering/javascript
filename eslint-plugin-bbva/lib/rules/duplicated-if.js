'use strict';

function getBlockString(source, node) {
	if (!node) {
		return [];
	}

	return [source.getText(node.consequent), ...getBlockString(source, node.alternate)];
}

function getTestString(source, node) {
	if (!node) {
		return [];
	}

	return [source.getText(node.test), ...getTestString(source, node.alternate)];
}

module.exports = {
    meta: {
        docs: {
            description: 'Duplicated if',
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
		return {
			IfStatement(node) {
				const source = context.getSourceCode();
				const blockTests = getBlockString(source, node);
				const blockUniqTests = Array.from(new Set(blockTests));

				const conditionTests = getTestString(source, node);
				const conditionUniqTests = Array.from(new Set(conditionTests));

				if (blockTests.length !== blockUniqTests.length) {
					context.report(node, 'Related "if/else if" statements should not have the same block');
				}

				if (conditionTests.length !== conditionUniqTests.length) {
					context.report(node, 'Related "if/else if" statements should not have the same condition');
				}
			}
		};
	}
};
