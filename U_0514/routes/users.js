const express = require('express');
const router = express.Router();

const connection = require('../db/database');

router.get('/', (req, res) => {

    const sql = 'SELECT * FROM users';

    connection.query(sql, (err, results) => {

        if (err) {
            console.log(err);
            res.send('エラー');
            return;
        }

        res.json(results);
    });
});

module.exports = router;