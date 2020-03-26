const { NODE_ENV = 'development' } = process.env;
const { DB = 'database' } = process.env;

module.exports = {
  dialect: 'postgres',
  host: DB,
  username: 'root',
  password: '123456789',
  database: `log_api_${NODE_ENV}`,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};