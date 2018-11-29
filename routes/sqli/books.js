var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.get('/search', (req, res, next) => {
  const q = req.query.q;
  pool.query(`SELECT * FROM bookTbl WHERE author='${q}';`, (err, resultset) => {
    const books = resultset.rows;
    res.render('sqli/books/index', { q: q, books: books });
    });
});

module.exports = router;
