const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers');
const { asyncErrorHandler } = require('../middleware');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'AutoFinder - home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.post('/login', postLogin);

/* GET /logout */
router.get('/logout', getLogout);

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot-password */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot-password */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset-password */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset-password */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;
