var express = require('express');
var router = express.Router();
var profile = {};

router.get('/edit', (req, res, next) => {
  res.render('xss/profile/edit', { profile: profile });
});

router.post('/preview', (req, res, next) => {
  const profile = {
    name: req.body.name,
    email: req.body.email,
    introduction: req.body.introduction
  };
  req.session.profile = profile;
  res.setHeader('X-XSS-Protection', 0);
  res.render('xss/profile/preview', { profile: profile });
});

router.post('/update', (req, res, next) => {
  profile = req.session.profile || {};
  res.redirect('edit');
});

module.exports = router;
