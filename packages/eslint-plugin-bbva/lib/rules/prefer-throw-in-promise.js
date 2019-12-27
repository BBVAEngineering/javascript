'use strict';

const astUtils = require('./_utils/ast-utils');

// Query for `Promise.reject`
const PROMISE_REJECT = '[callee.object.name=Promise][callee.property.name=reject]';

function getRejectTypesQuery(defaultImport, rejectImport) {
	// Query for `reject`, `RSVP.reject`, `Promise.reject`
	if (defaultImport && rejectImport) {
		// eslint-disable-next-line max-len
		return `:matches([callee.name=${rejectImport}], :matches([callee.object.name=${defaultImport}][callee.property.name=reject], ${PROMISE_REJECT}))`;
	}

	// Query for `RSVP.reject`, `Promise.reject`
	if (defaultImport) {
		return `:matches([callee.object.name=${defaultImport}][callee.property.name=reject], ${PROMISE_REJECT})`;
	}

	// Query for `reject`, `Promise.reject`
	if (rejectImport) {
		return `:matches([callee.name=${rejectImport}], ${PROMISE_REJECT})`;
	}

	return null;
}

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer throwing Error instances instead of chaining rejected promises',
			recommended: false
		},
		messages: {
			throwInsteadOfReject: 'throw an Error instead of returning a rejected promise'
		},
		fixable: null,
		schema: []
	},

	create(context) {
		const rsvpImport = astUtils.getImportNodes(context.getScope()).find((node) => node.source.value.endsWith('rsvp'));
		let rejectQuery;

		if (rsvpImport) {
			const { default: defaultImport, reject } = astUtils.getImportSpecifiers(rsvpImport);

			rejectQuery = getRejectTypesQuery(defaultImport, reject);
		}

		if (!rejectQuery) {
			rejectQuery = PROMISE_REJECT;
		}

		return {
			// Matches any `reject` (either Promise or imported from RSVP library) inside a `then` / `catch`
			[`CallExpression:matches([callee.property.name=then], [callee.property.name=catch]) CallExpression${rejectQuery}`](node) {
				context.report({
					node,
					messageId: 'throwInsteadOfReject'
				});
			},

			// Matches any `reject` (either Promise or imported from RSVP library) inside a `try ... catch`
			[`TryStatement CallExpression${rejectQuery}`](node) {
				context.report({
					node,
					messageId: 'throwInsteadOfReject'
				});
			}
		};
	}
};
