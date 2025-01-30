import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "react/no-unknown-property": "warn",
      "react/jsx-uses-react": "off",
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
