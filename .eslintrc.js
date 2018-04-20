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
    "quotes": ["error", "double",
               {"allowTemplateLiterals": true, "avoidEscape": true}],
    "semi": ["error", "always"]
  }
};
