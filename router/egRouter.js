const express = require('express');
const router = express.Router();
const {getRoute,postRoute,putRoute,deleteRoute} = require('../controllers/egController');
router.get('/',getRoute);
router.post('/post',postRoute);
router.put('/put/:id',putRoute);
router.delete('/delete/:id',deleteRoute);

module.exports = router;