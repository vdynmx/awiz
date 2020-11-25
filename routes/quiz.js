const express = require('express');
const quizController = require('../controllers/quiz');
const router = express.Router();

router.get('/', quizController.getAllQuizzes); // quiz list

router.post('/submit', quizController.createQuiz);


module.exports = router;