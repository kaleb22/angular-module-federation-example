const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.status(200)
  .jsonp(
    {
      data: {
        message: 'login sucessfull',
        userName: 'Vegeta'
      }
    }
  )
});

module.exports = router;
