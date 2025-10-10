import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("import.meta.url", import.meta.url);
console.log("__filename", __filename);
console.log("__dirname", __dirname);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
console.log("compat", compat);

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
