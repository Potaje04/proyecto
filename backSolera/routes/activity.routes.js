const router = require('express').Router();

const {
    create,
    getAll,
    getOne,
    deleteOne,
    updateOne
} = require('../controller/activity.controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/create', create);
router.delete('/:id', deleteOne);
router.put('/:id', updateOne);


module.exports = router;