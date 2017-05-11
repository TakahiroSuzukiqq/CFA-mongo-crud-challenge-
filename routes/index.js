var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');

/* GET home page. */
router.get('/', ingredientController.getIngredients);
router.post('/', ingredientController.getNewingredients);
router.get('/ingredients/:id/edit', ingredientController.getEditingredients);
router.post('/ingredients/:id/edit', ingredientController.postEditingredients);
router.get('/ingredients/:id/delete', ingredientController.getDeleteingredients);
router.get('/ingredients/api/:id', ingredientController.getApiingredients);

module.exports = router;
