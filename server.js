const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3006;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/product/:id', express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/productDetails/:id', (req, res) => {
  res.redirect(`http://ec2-54-219-171-140.us-west-1.compute.amazonaws.com${req.url}`);
});

app.get('/reviews-module/reviews/product/:id', (req, res) => {
  res.redirect(`http://18.191.180.179${req.url}`);
});

app.get('/product/:id/related', (req, res) => {
  res.redirect(`http://you-may-also-like-load-balancer-1474842517.us-west-1.elb.amazonaws.com${req.url}`);
});

app.get('/product/:id/images', (req, res) => {
  res.redirect(`http://ec2-18-219-118-99.us-east-2.compute.amazonaws.com${req.url}`);
});
