
var express = require('express');
var router = express.Router()

var AssetController = require('../controllers/assets.controller');

router.post('/addAsset', AssetController.createAsset);
router.get('/viewAssets', AssetController.getAssets);
router.put('/updateAsset', AssetController.updateAsset);
router.delete('/deleteAsset/:id', AssetController.removeAsset);

module.exports = router;
