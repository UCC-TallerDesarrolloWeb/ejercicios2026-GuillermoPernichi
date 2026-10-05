import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser },
    rules: {
      // Aquí puedes personalizar tus reglas adicionales
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
]);
