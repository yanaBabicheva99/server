const express = require('express');
const controller = require('../controllers/productsController');
const passport = require('passport');
const router = express.Router();

//
// router.get('/getproducts', controller.getUserProducts);
// router.delete('/removeproducts', controller.removeUserProducts);
// router.post('/createproducts', controller.createUserProducts);
// router.patch('/updateproducts', controller.updateUserProducts);
// router.patch('/updatesolditemsproduct', controller.updateSoldItemsUserProducts);
// router.patch('/updateremainsproduct', controller.updateRemainsUserProducts);




router.get('/', passport.authenticate('jwt', {session: false}), controller.getUserProducts);
// router.get('/', controller.getUserSoldProducts);
// router.patch('/:id', controller.removeUserProducts);
//
// router.post('/', controller.createUserProducts);
// router.patch('/:id', controller.updateUserProducts);
// router.patch('/:id', controller.changeUserProducts);


module.exports = router;