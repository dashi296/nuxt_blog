module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'standard',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": "off",
    curly: [2, "multi"],
    "arrow-parens": ["error", "always"],
    "no-console": "off",
    "space-before-function-paren": ["error", "never"],


    camelcase: 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-array-constructor': 'error',
    '@typescript-eslint/no-array-constructor': 'error'
  }
}
