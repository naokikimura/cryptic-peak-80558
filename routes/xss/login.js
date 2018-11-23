var express = require('express');
var router = express.Router();
var profile = {};

router.get('/', (req, res, next) => {
  res.setHeader('X-XSS-Protection', 0);
  res.render('xss/login', { login: { id: req.query.ID } });
});

router.post('/', (req, res, next) => {
  res.setHeader('X-XSS-Protection', 0);
  res.redirect('/');
});

module.exports = router;
