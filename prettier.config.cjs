/**
 * `cjs` format is required for plugins to work in VSCode.
 * @see {@link https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/113}
 */

/** @type {import('prettier').Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-packagejson")],
  printWidth: 100,
};

module.exports = config;
