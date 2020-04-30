
module.exports = {
  parserOptions: {
    ecmaFeatures: {
        jsx: true
    }
  },
  configs: {
    airbnbConfig : {
      "extends": "airbnb-base",
      "rules" : {
        "no-console": "off",
      },
    },
    jestConfig: {
      "plugins": ["jest"],
      "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
      }
    }
  }
};
