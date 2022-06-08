const router = require('express').Router();
const ECGMetadataRoutes = require('./ECGMetadata.route');
const {getAllECG, getECG, updateECG, addECG, deleteECG, getAllECGForDataSet} = require("../controllers/ECG.controller");
require('express-fileupload');

router.get('/', getAllECG);
router.get('/specific', getECG);
router.get('/dataset/:id', getAllECGForDataSet);
router.post('/', addECG);

router.put('/:id', updateECG);

router.delete('/:id', deleteECG);

router.use('/metadata', ECGMetadataRoutes);

module.exports = router;