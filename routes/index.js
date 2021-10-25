const { Router, response } = require('express');
const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category-controller')
const bookController = require('../controller/books-controller')

//CATEGORY CONTROLLER ROUTES
router.get('/category',categoryController.getAllCategory);

router.post('/category',categoryController.createCategory);

router.get('/category/:id', categoryController.getById);

router.put('/category/:id',categoryController.updateCategory);

router.delete('/category/:id',categoryController.deleteCategory);

//BOOKS CONTROLLER ROUTES
router.get('/book',bookController.getAllbook);

router.post('/book',bookController.createBook);

router.get('/book/:id', bookController.getBookById);

router.put('/book/:id',bookController.updateBook);

router.delete('/bookB/:id',bookController.deleteBook);

module.exports = router;