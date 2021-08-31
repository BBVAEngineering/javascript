"use strict";

const astUtils = require("./_utils/ast-utils");
const UNCHECKABLE_EXPRESSION_TYPES = [
  "CallExpression",
  "Identifier",
  "LogicalExpression",
  "BinaryExpression",
  "ConditionalExpression",
];

function checkRejectWithError(context, node) {
  if (node.arguments.length === 0) {
    context.report({
      node,
      messageId: "expectRsvpRejectWithError",
    });

    return;
  }

  const firstArgument = node.arguments[0];
  const report = {
    node,
    messageId: "expectRsvpRejectWithError",
  };

  if (firstArgument.type === "NewExpression") {
    return;
  }

  if (firstArgument.type === "Identifier") {
    const scope = context.getScope(node);
    const variable = scope.set.get(firstArgument.name);

    if (variable) {
      const writings = variable.references
        .map((ref) => ref.writeExpr)
        .filter(Boolean);
      const lastWrite = writings.length ? writings[writings.length - 1] : null;

      if (
        lastWrite &&
        !["NewExpression", ...UNCHECKABLE_EXPRESSION_TYPES].includes(
          lastWrite.type
        )
      ) {
        context.report(report);
      }
    }

    return;
  }

  context.report(report);
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "require using Error instances as RSVP Promise rejection reasons",
      recommended: false,
    },
    messages: {
      expectRsvpRejectWithError:
        "Expected the RSVP Promise rejection reason to be an Error",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    function visitor(node) {
      return checkRejectWithError(context, node);
    }

    const rsvpImport = astUtils
      .getImportNodes(context.getScope())
      .find((node) => node.source.value.endsWith("rsvp"));

    if (!rsvpImport) {
      return {}; // No RSVP imported, nothing to check
    }

    const { default: defaultImport, reject } =
      astUtils.getImportSpecifiers(rsvpImport);

    if (!(defaultImport || reject)) {
      return {}; // No RSVP imported, nothing to check
    }

    const selectors = {};

    if (defaultImport) {
      selectors[
        `CallExpression[callee.type=MemberExpression][callee.object.name=${defaultImport}][callee.property.name=reject]`
      ] = visitor;
    }

    if (reject) {
      selectors[`CallExpression[callee.name=${reject}]`] = visitor;
    }

    return selectors;
  },
};
