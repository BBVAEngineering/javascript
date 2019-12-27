'use stric';

module.exports = {
	getImportNodes(scope) {
		const body = scope ? scope.block.body : [];
		const imports = body.filter((node) => node.type === 'ImportDeclaration');

		return imports;
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
