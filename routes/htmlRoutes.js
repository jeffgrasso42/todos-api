const router = require('express').Router();

router.get('/', () => {
  res.json('This is the Homepage!');
});
module.exports = router;
