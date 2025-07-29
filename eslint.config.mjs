import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

const reactConfigWithVersion = {
  ...pluginReact.configs.flat.recommended,
  settings: {
    ...(pluginReact.configs.flat.recommended.settings ?? {}),
    react: {
      version: "detect",
    },
  },
  rules: {
      ...(pluginReact.configs.flat.recommended.rules ?? {}),
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,
      "no-unused-vars": 0
    },
};

export default defineConfig([
  {
    ignores: [
      "node_modules",
      "dist", 
      "**/*.test.jsx"
    ]
  },
  {
    
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact}, extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {...globals.browser, ...globals.node} 
    },
    rules: {
      ...js.configs.recommended.rules,
    },

    

  },
  {
    
    files: ["client/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    
    files: ["server/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
  },

  reactConfigWithVersion,
  
]);
