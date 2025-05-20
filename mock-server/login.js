const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200)
  .jsonp(
    {
      data: {
        message: 'login sucessfull'
      }
    }
  )
});

module.exports = router;
