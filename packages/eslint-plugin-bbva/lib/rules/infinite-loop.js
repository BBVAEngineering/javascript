"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Infinite loop detection",
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      ForStatement(node) {
        const init = node.init;
        const update = node.update;

        if (init.type === "VariableDeclaration") {
          const vars = init.declarations
            .map((declarator) => declarator.id && declarator.id.name)
            .filter(Boolean);

          if (
            update.argument &&
            update.argument.type === "Identifier" &&
            !vars.includes(update.argument.name)
          ) {
            context.report(
              node,
              '"for" loop incrementers should modify the variable being tested in the loop\'s stop condition'
            );
          } else if (
            update.type === "AssignmentExpression" &&
            !vars.includes(update.left.name)
          ) {
            context.report(
              node,
              '"for" loop incrementers should modify the variable being tested in the loop\'s stop condition'
            );
          }
        }
      },
    };
  },
};
