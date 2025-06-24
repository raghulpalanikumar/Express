const express = require('express');
const router = express.Router();
const {getRoute,postRoute,putRoute,loginRoute,deleteRoute,getRouteById} = require('../controllers/egController');
router.get('/',getRoute);
router.get('/get/:id',getRouteById)
router.post('/signup',postRoute);//8
router.put('/put/:id',putRoute);
router.delete('/delete/:id',deleteRoute);
//8
router.post('/login',loginRoute)
module.exports = router;