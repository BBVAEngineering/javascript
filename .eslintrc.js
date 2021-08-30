module.exports = {
  root: true,
  parserOptions: {
    sourceType: "script",
  },
  plugins: ["node", "prettier"],
  extends: [
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "eslint-config-bbva",
  ],
};
