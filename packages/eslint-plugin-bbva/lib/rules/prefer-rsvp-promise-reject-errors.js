'use strict';

const UNCHECKABLE_EXPRESSION_TYPES = ['CallExpression', 'Identifier', 'LogicalExpression', 'BinaryExpression', 'ConditionalExpression'];

function checkRejectWithError(context, node) {
	if (node.arguments.length === 0) {
		context.report({
			node,
			messageId: 'expectRsvpRejectWithError'
		});

		return;
	}

	const firstArgument = node.arguments[0];
	const report = {
		node,
		messageId: 'expectRsvpRejectWithError'
	};

	if (firstArgument.type === 'NewExpression') {
		return;
	}

	if (firstArgument.type === 'Identifier') {
		const scope = context.getScope(node);
		const variable = scope.set.get(firstArgument.name);

		if (variable) {
			const writings = variable.references.map((ref) => ref.writeExpr).filter(Boolean);
			const lastWrite = writings.length ? writings[writings.length - 1] : null;

			if (lastWrite && !['NewExpression', ...UNCHECKABLE_EXPRESSION_TYPES].includes(lastWrite.type)) {
				context.report(report);
			}
		}

		return;
	}

	context.report(report);
}

module.exports = {
	meta: {
		messages: {
			expectRsvpRejectWithError: 'Expected the RSVP Promise rejection reason to be an Error',
		},
		type: 'suggestion',
		docs: {
			description: 'require using Error objects as RSVP Promise rejection reasons',
			recommended: false
		},
		fixable: null,
		schema: []
	},

	create(context) {
		// We have to retrieve the name of the rsvp imports in case they are aliased
		let defaultImportName = 'RSVP';
		let rejectImportName = 'reject';

		// Check the body for `import ... from '.*rsvp';` nodes
		const body = context.getScope().block.body;
		const imports = body.filter((node) => node.type === 'ImportDeclaration');
		const rsvpImport = imports.find((node) => node.source.value.endsWith('rsvp'));

		if (!rsvpImport) {
			return {};
		}

		// If rsvp library is imported, look for the default object or the `reject` function
		const defaultImport = rsvpImport.specifiers.find((spec) => spec.type === 'ImportDefaultSpecifier');
		const rejectImport = rsvpImport.specifiers.find((spec) => spec.type === 'ImportSpecifier' && spec.imported.name === 'reject');

		if (defaultImport) {
			defaultImportName = defaultImport.local.name;
		}

		if (rejectImport) {
			rejectImportName = rejectImport.local.name;
		}

		return {
			// Matches `RSVP.reject(...)` instances
			[`CallExpression[callee.type=MemberExpression][callee.object.name=${defaultImportName}][callee.property.name=reject]`](node) {
				return checkRejectWithError(context, node);
			},

			[`CallExpression[callee.name=${rejectImportName}]`](node) {
				return checkRejectWithError(context, node);
			}
		};
	}
};
