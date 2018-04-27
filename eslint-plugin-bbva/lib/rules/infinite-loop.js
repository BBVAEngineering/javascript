'use strict';

module.exports = {
    meta: {
        docs: {
            description: 'Infinite loop detection',
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
		return {
			ForStatement(node) {
				const init = node.init;
				const update = node.update;

				if (init.type === 'VariableDeclaration') {
					const vars = init.declarations.map((declarator) => {
						return declarator.id && declarator.id.name;
					}).filter(Boolean);

					if (update.argument.type === 'Identifier' && !vars.includes(update.argument.name)) {
						context.report(node, '"for" loop incrementers should modify the variable being tested in the loop\'s stop condition');
					}
				}
			}
		};
	}
};
