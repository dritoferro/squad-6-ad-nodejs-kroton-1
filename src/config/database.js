module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'root',
  password: '123456789',
  database: 'log_api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
