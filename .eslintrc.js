module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
        createDefaultProgram: true,
    },
    globals: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __ENVIRONMENT__: "readonly",
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
    plugins: ["@typescript-eslint", "prettier", "import", "react-hooks", "simple-import-sort"],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
    },
    rules: {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    Object: {
                        message: "Avoid using the `Object` type. Did you mean `object`?",
                        fixWith: "object",
                    },
                    Function: {
                        message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
                        fixWith: "() => void",
                    },
                    Boolean: {
                        message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
                        fixWith: "boolean",
                    },
                    Number: {
                        message: "Avoid using the `Number` type. Did you mean `number`?",
                        fixWith: "number",
                    },
                    String: {
                        message: "Avoid using the `String` type. Did you mean `string`?",
                        fixWith: "string",
                    },
                    Symbol: {
                        message: "Avoid using the `Symbol` type. Did you mean `symbol`?}}",
                        fixWith: "symbol",
                    },
                },
            },
        ],
        camelcase: "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "default",
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
                filter: {
                    regex: "^(__typename|__|__ENVIRONMENT__|__dirname)$",
                    match: false,
                },
            },
            {
                selector: "interface",
                format: ["PascalCase"],
            },
            {
                leadingUnderscore: "allow",
                filter: {
                    regex: "^(__typename|__|__ENVIRONMENT__|__dirname)$",
                    match: false,
                },
                selector: "property",
                format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
            },
        ],
        "@typescript-eslint/consistent-type-definitions": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/member-ordering": [
            "warn",
            {
                default: [
                    // Index signature
                    "signature",

                    // Fields
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",

                    "public-field",
                    "protected-field",
                    "private-field",

                    "static-field",

                    "field",

                    // Constructors
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",

                    "constructor",

                    // Methods
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",

                    "public-method",
                    "protected-method",
                    "private-method",

                    "static-method",

                    "method",
                ],
            },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": ["warn", { allow: ["constructors"] }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": ["warn"],
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/semi": "warn",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "warn",
        "comma-dangle": ["warn", "always-multiline"],
        "@typescript-eslint/array-type": "off",
        curly: ["off", "multi-line"],
        "arrow-parens": ["off", "as-needed"],
        "no-return-assign": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-floating-promises": "off",
        "dot-notation": "warn",
        "eol-last": "warn",
        eqeqeq: ["error", "allow-null"],
        "guard-for-in": "error",
        "id-blacklist": ["error", "Undefined", "any", "boolean", "number", "string", "err"],
        "import/no-default-export": "warn",
        "simple-import-sort/imports": [
            "error",
            {
                groups: [
                    [
                        // react
                        "^react$",
                        // @*
                        "^@?\\w",
                        // ../
                        "^\\.\\.(?!/?$)",
                        "^\\.\\./?$",
                        // ./
                        "^\\./(?=.*/)(?!/?$)",
                        "^\\.(?!/?$)",
                        "^\\./?$",
                    ],
                    // all the rest
                    ["^"],
                    // styles
                    ["style(d|s)$"],
                ],
            },
        ],
        "simple-import-sort/exports": "error",
        "max-classes-per-file": ["warn"],
        "max-len": [
            "warn",
            120,
            {
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignorePattern: "://",
                ignoreTemplateLiterals: true,
            },
        ],
        "new-parens": "error",
        "no-bitwise": "warn",
        "no-caller": "error",
        "no-console": "warn",
        "no-constant-condition": "off",
        "no-debugger": "off",
        "no-eval": "error",
        "no-implied-eval": "error",
        "no-multiple-empty-lines": "warn",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "warn",
        "no-undef": "off",
        "no-undef-init": "warn",
        "no-unused-expressions": "warn",
        "object-shorthand": "warn",
        "one-var": ["warn", "never"],
        "quote-props": ["warn", "as-needed"],
        quotes: "warn",
        radix: ["warn", "as-needed"],
        "space-before-function-paren": [
            "warn",
            {
                named: "never",
            },
        ],
        "spaced-comment": [
            "warn",
            "always",
            {
                exceptions: ["html"],
            },
        ],
        "no-nested-ternary": "warn",
        // turn on errors for missing imports
        "import/no-unresolved": "error",
        "import/namespace": "off",
        "import/extensions": "off",
        "import/no-named-as-default-member": "off",
    },
    overrides: [
        {
            files: ["**/*.{story,stories}.@(ts|tsx)"],
            rules: {
                "no-console": "off",
                "@typescript-eslint/no-empty-function": "off",
            },
        },
    ],
};
