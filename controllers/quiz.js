const Quiz = require('../models/quiz');

exports.createQuiz = async (req, res, next) => {
    const question = req.body.question;
    const answers = req.body.answers;
    try {
        const quiz = new Quiz({
            question = question,
            answers = answers
        });
        console.log('new Quiz object'+quiz);
        await quiz.save();
        res.json({message: "Quiz created"});
    }
    catch(err) {
        console.log(err);
        next();
    }
};
