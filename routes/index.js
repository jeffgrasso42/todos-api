const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./api/todoRoutes');

// HTML ROUTES
// GET / - home page
router.use('/', htmlRoutes);

// API ROUTES
router.use('/api', apiRoutes);

module.exports = router;
