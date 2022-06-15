module.exports = {
  apps: [
    {
      name: "GStock",
      script: "./dist/server.js",
      env: {
        GS_PORT: "7500",
      },
    },
  ],
};
