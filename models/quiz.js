const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [{
        type: String  
    }]
});

module.exports = mongoose.model('Quiz', quizSchema);