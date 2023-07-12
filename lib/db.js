require("dotenv").config();

const pgp = require("pg-promise")({
  noWarnings: true,
});
const { DB_CONNECT_STRING } = process.env;

const DB = pgp(DB_CONNECT_STRING);

export { DB };
