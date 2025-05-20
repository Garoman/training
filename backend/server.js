const express = require('express');
const db = require('./db/mysql/models');
const Users = db.Users;
const path = require('path');
const dotenvPath = path.resolve(__dirname, `.env.${process.env.NODE_ENV || 'dev'}`);
require('dotenv').config({ path: dotenvPath });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create User
app.post('/users', async (req, res) => {
    try {
        const { username, email, password_hash } = req.body;
        const user = await Users.create({ username, email, password_hash });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

(async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();