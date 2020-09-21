const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations, {
    privateFor: ["ffeOfWK+y9RU5znVxpPZYAqb3L6wxqoYLr6hcvNYni4="],
  });
};
