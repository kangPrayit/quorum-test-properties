var HelloWorld = artifacts.require("HelloWorld");

module.exports = function (_deployer) {
  _deployer.deploy(HelloWorld, {
    privateFor: ["ffeOfWK+y9RU5znVxpPZYAqb3L6wxqoYLr6hcvNYni4="],
  });
};
