const express = require('express');
const app = express();
const port = 5000;
const svgCaptcha = require('svg-captcha');

app.get('/', (req, res) => {
  res.send('Copyright (c) 2022 Ngoc Tuan');
})

app.get('/captchapreview', function (req, res) {
  let captcha = svgCaptcha.create({
    size: req.query.size || 6,
    noise: req.query.noise || 1,
    color: req.query.color,
    charPreset: req.query.charPreset,
  });

  res.type('svg');
  res.status(200).send(captcha.data);
});

app.get('/captcha', function (req, res) {
  let captcha = svgCaptcha.create({
    size: req.query.size || 6,
    noise: req.query.noise || 1,
    color: req.query.color,
    charPreset: req.query.charPreset,
  });

  res.type('svg');
  let data = {
    data: captcha.data,
    text: captcha.text,
  }
  res.status(200).send(data);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Svg captcha app listening on port ${port}`);
})
