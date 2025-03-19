const { shareAll, withModuleFederationPlugin, SharedMappings } = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [
    '@shared'
  ]
)

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  exposes: {
    "./routes": "./projects/mfe1/src/app/mfe1.routes.ts",
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
    ...sharedMappings.getDescriptors()
  }
});
