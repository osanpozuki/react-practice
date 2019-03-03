module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "settings": {
    "node": {
      "tryExtensions": [".ts", ".js", ".json", ".node", ".tsx"]
    }
  },
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error"
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "no-unused-vars": ["off"],
        "no-undef": ["off"]
      }
    }
  ]
}