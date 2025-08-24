// ecosystem.config.js
// package.json에 "type": "module"이 있을 때 사용
export default {
  apps: [{
    name: "smartfarming-ai",
    script: ".next/standalone/server.js",
    instances: 1,
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 3000,
      NODE_OPTIONS: "--max-old-space-size=2048"
    },
    error_file: "./logs/pm2-error.log",
    out_file: "./logs/pm2-out.log",
    log_file: "./logs/pm2-combined.log",
    time: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: "10s",
    watch: false,
    max_memory_restart: "1G"
  }]
};