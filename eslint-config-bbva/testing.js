var rules = require('./rules/basic.json');


module.exports = {
	extends: [
		'./rules/basic.json',
		'./rules/testing.json',
	].map(require.resolve),

	rules: {
		// O_O
	}
};
