const router = require('express').Router();
const ECGMetadataRoutes = require('./ECGMetadata.route');
const {getAllECG, getECG, updateECG, addECG, deleteECG} = require("../controllers/ECG.controller");

router.get('/', getAllECG);
router.get('/specific', getECG);

router.post('/', addECG);

router.put('/:id', updateECG);

router.delete('/:id', deleteECG);

router.use('/metadata', ECGMetadataRoutes);

module.exports = router;