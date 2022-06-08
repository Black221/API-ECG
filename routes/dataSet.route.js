const express = require('express');
const router = express.Router();


const dataSetController = require('../controllers/dataSet.controller');
router.get('/', dataSetController.getAllDataSet);
router.get('/specific/:id', dataSetController.getDataSet);

router.post('/', dataSetController.addDataSet);
router.put('/:id', dataSetController.updateDataSet);
router.delete('/:id', dataSetController.deleteDataSet);

module.exports = router;