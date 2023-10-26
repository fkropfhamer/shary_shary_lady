module.exports = {
    database: {
      host: process.env.DB_HOST || "db",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "1234",
      database: process.env.DB_NAME || "data",
    },
    server: {
      port: process.env.PORT || 3001,
    },
  };
  