const path = require('path');
const dotenvPath = path.resolve(__dirname, `../../../.env.${process.env.NODE_ENV || 'dev'}`);
require('dotenv').config({ path: dotenvPath });

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        "port": process.env.DB_PORT
    }
}