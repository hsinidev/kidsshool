module.exports = {
  apps: [
    {
      name: "kidsshool",
      script: "server.js",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        DATABASE_URL: "file:./dev.db"
      }
    }
  ]
};
