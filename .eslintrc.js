const path = require('path')

module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		shallow: true,
		render: true,
		mount: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react-hooks', 'prettier', '@typescript-eslint'],
	extends: [
		'airbnb',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'import/no-cycle': [0],
		'react/react-in-jsx-scope': [0],
		'no-use-before-define': [0],
		'arrow-parens': ['error'],
		// Linebreaks are handled by Git
		'linebreak-style': 'off',
		'eol-last': 'error',
		'lines-between-class-members': ['error', 'always'],
		// Don't see the practical point of this rule
		'no-shadow': 'off',
		// Defining functions in the end of the scope is a common pattern,
		// so we can disable the `functions` check
		// + Using variables before they are defined, but in inner scopes (e.g. in functions)
		// should also be OK
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, variables: false },
		],
		// allowTernary: a ? b() : c()
		'no-unused-expressions': ['error', { allowTernary: true }],
		// Doing `foo == null` to compare to both null and undefined is OK
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		// For files like `common.js`, it’s OK to have one named non-default export
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		// It’s OK to use .any/.array/.object if a component just passes the prop down
		// and doesn’t care about its structure
		'react/forbid-prop-types': 'off',
		'react/prop-types': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		// It’s OK to assign to parameter fields when it’s necessary
		'no-param-reassign': ['error', { props: false }],
		// It’s OK to name fields with `_`.
		'no-underscore-dangle': 'off',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'function-paren-newline': 'off',
		'import/no-useless-path-segments': 'off',
		'implicit-arrow-linebreak': [0, 'beside'],
		'object-curly-newline': 'off',
		'operator-linebreak': [0, 'after'],
		'prefer-destructuring': 'off',
		// There are multiple real cases where we really need to do setState() in componentDidMount() or componentDidUpdate(),
		// and this rule rather annoys than brings a real value
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'off',
		'react/no-array-index-key': 'off',
		'react/jsx-key': 'error',
		'react/sort-prop-types': ['error', { sortShapeProp: false }],
		// This was too hard to fix when migrating the code to the AirBnB config.
		// Ideally, it should be enabled
		'react/require-default-props': 'off',
		// We already use `dangerouslySetInnerHTML` only in rare occasions
		'react/no-danger': 'off',
		'react/jsx-closing-tag-location': 'warn',
		'react/no-access-state-in-setstate': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/static-property-placement': 'off',
		'react/state-in-constructor': 'off',
		'no-alert': 'off',
		'no-restricted-syntax': ['off', 'ForOfStatement'],

		// Tweaks for the project code style
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				vue: 'never',
			},
		],
		'template-curly-spacing': 'off',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': ['error'],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		camelcase: 'off',
		'max-classes-per-file': 'off',
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	// Fix `import/no-extraneous-dependencies` plugin giving errors for imports from aliases
	// (We use this specific config instead of plain 'import/resolver': 'webpack'
	// because the latter changes how 'import/extensions' behaves,
	// and `npm run lint` starts behaving differently from the IntelliJ ESLint integration.)
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				moduleDirectory: ['.', 'node_modules'],
			},
			typescript: {},
			webpack: {
				config: {
					resolve: {
						extensions: ['.js', '.jsx', '.ts', '.tsx'],
						alias: {
							react: path.resolve(__dirname, 'node_modules', 'react'),
						},
					},
				},
			},
		},
	},
}
