"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Useless increment",
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      AssignmentExpression(node) {
        const source = context.getSourceCode();
        const left = node.left;
        const right = node.right;

        if (
          node.operator === "=" &&
          right &&
          right.type === "UpdateExpression" &&
          !right.prefix
        ) {
          const leftText = source.getText(left);
          const rightText = source.getText(right.argument);

          if (leftText === rightText) {
            context.report(node, "Values should not be uselessly incremented");
          }
        }
      },
    };
  },
};
