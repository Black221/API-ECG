const {addECGMetadata, updateECGMetadata, deleteECGMetadata} = require("../controllers/ECGMetadata.controller");
const router = require('express').Router();

router.post('/', addECGMetadata);
router.put('/:id', updateECGMetadata);
router.delete('/:id', deleteECGMetadata);


module.exports = router;