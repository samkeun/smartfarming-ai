module.exports = {
  apps: [{
    name: "smartfarming-ai",
    script: ".next/standalone/server.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};
