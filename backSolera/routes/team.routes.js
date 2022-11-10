const router = require('express').Router();

const {
    create,
    getAll,
    addPoints,
    getAllActivities,
    getOne,
    deleteOne,
    addActivity
} = require('../controller/team.controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/create', create);
router.delete('/:id', deleteOne);
router.post('/:id', addPoints);

module.exports = router;