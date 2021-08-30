"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Inline conditional",
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      ExpressionStatement(node) {
        if (node.expression && node.expression.type === "LogicalExpression") {
          context.report(
            node,
            "Curly braces should be used instead inline conditionals"
          );
        }
      },
    };
  },
};
