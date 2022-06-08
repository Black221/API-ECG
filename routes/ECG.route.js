const router = require('express').Router();
const ECGMetadataRoutes = require('./ECGMetadata.route');

router.get('/', );
router.get('/specific', );

router.post('/', );

router.put('/:id', );

router.delete('/:id', );

router.patch('/', );
router.patch('/', );

router.use('/metadata', ECGMetadataRoutes);

module.exports = router;