module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:eslint-plugin-next-on-pages/recommended",
  ],
  plugins: ["prettier", "import", "simple-import-sort", "@typescript-eslint", "eslint-plugin-next-on-pages"],
  rules: {
    // general rules
    "no-unused-expressions": "error",

    // imports rules
    "import/no-unresolved": "warn",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "error",
    "import/no-default-export": "error",

    // typescript rules
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],

    // prettier rules
    "prettier/prettier": "error",

    // simple import sort rules
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // react rules
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/self-closing-comp": "warn",
    "react-hooks/rules-of-hooks": "error",

    //next rules
    "@next/next/no-img-element": "off",

    //tailwind rules
    "tailwindcss/no-custom-classname": "off",
  },
  overrides: [
    {
      // override "simple-import-sort" config
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // External packages
              ["^@?\\w"],

              // Internal packages
              ["^(@/)"],

              // Relative imports
              ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

              // Import types
              ["^@?\\w.*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$"],

              // Style imports
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
    {
      // overide "no-default-export" for pages
      files: ["./src/app/**/{page,layout,not-found}.tsx", "./*.config.{mjs,cjs,ts}"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
