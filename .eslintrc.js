module.exports = {

	//Environments
	'env': {
		'node': true,
		'browser': true,
		'mocha': true
	},

	'extends': 'eslint:recommended',

	'rules': {

		//2 space indentation with enabled switch cases indentation
		'indent': [2, 2, {'SwitchCase': 1}],

		//disallow mixed ‘LF’ and ‘CRLF’ as linebreaks
		'linebreak-style': [2, 'unix'],
		'quotes': [2, 'double'],

		//semicolons must be used any place where they are valid
		'semi': [2, 'always'],

		//This rule does not allow gaps between the function identifier and application.
		'no-spaced-func': 2,

		//Disallow Use of console : false
		'no-console': 0,

		'keyword-spacing': [2, {'before': true, 'after': true, 'overrides': {}}],

		//enforce newline at the end of file, with no multiple empty lines
		'eol-last': 2
	}

};