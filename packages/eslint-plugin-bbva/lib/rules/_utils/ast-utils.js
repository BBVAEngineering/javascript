'use stric';

module.exports = {
	getImportNodes(scope) {
		return scope.block.body.filter((node) => node.type === 'ImportDeclaration');
	},

	getImportSpecifiers(importNode) {
		return importNode.specifiers.reduce((acc, current) => {
			let unaliased;

			if (current.type === 'ImportDefaultSpecifier') {
				unaliased = 'default';
			} else {
				unaliased = current.imported.name;
			}

			acc[unaliased] = current.local.name;

			return acc;
		}, {});
	}
};
