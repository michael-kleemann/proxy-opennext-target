/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "proxy-opennext-target",
      removal: "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("ProxyOpennextTarget", {openNextVersion: "3.1.0"});
  },
});
