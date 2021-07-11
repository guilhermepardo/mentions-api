const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controllers');

router.get('/', mentionsController.listMentions);
router.post('/', 
[check('friend').isLength({min: 7}).withMessage("O nome precisa ter 7 caracteres."),
check('mention').isLength({min: 20, max: 280}).withMessage("A menção precisa ter no minimo 20 caracteres e no máximo 280.")], 
mentionsController.createMention);

module.exports = router;