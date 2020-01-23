const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => {
    apod = {
      apodUrl: response.data.url,
      apodExplanation: response.data.explanation
    };
}).catch(error => {
    console.log(error);
});

router.get('/', (req, res, next) => {
  res.render('apod', {pageTitle: 'APOD', apodUrl: apod.apodUrl, apodExplanation: apod.apodExplanation});
});

router.get('/another-page', (req, res, next) => {
  res.render('another-page', {pageTitle: 'Another Page'});
});

module.exports = router;
