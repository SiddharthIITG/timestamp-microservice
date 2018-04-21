const express = require('express');
const dateRouter = express.Router();
const url = require('url');

function router() {
  dateRouter.route('/')
    .get((req, res) =>{
      res.send('Here');
      // res.send(JSON.stringify({unix: Date.parse(url.parse(req.url).path), natural : new Date(Date.parse(url.parse(req.url).path)).toLocaleString()}));
  });
  return dateRouter;
}

module.exports = router;