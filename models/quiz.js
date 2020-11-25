const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [{
       answer: { type: String },
       isCorrect: Boolean // should false even be saved ? if field is not available would be it falsey ?
    }]
});

module.exports = mongoose.model('Quiz', quizSchema);