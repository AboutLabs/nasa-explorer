const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'apod.html'));
});

router.get('/another-page', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'another-page.html'));
});

module.exports = router;
