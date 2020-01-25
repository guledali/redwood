// We use the recommended babel configuration for monorepos, which is a base directory
// `babel.config.mjs` file, but then use a per-project `.babelrc.mjs` file.
// Learn more: https://babeljs.io/docs/en/config-files#monorepos

module.exports = {
  presets: ['@babel/preset-react', '@babel/typescript'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}