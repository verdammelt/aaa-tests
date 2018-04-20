module.exports = {
  "extends": "standard",
  "parserOptions": {
    "ecmaVersion": 2015
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "indent": ["error", 2,
               {"ArrayExpression": "first"}],
    "no-unused-vars": ["error",
                       {"vars": "all", "args": "all", "argsIgnorePattern": "^_"}],
    "quotes": ["error", "double",
               {"allowTemplateLiterals": true, "avoidEscape": true}],
    "semi": ["error", "always"]
  }
};
