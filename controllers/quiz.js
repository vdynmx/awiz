const Quiz = require('../models/quiz');

exports.createQuiz = async (req, res, next) => {
    const question = req.body.question;
    const answers = req.body.answers;
    try {
        const quiz = new Quiz({
            question: question,
            answers: answers
        });
        console.log('new Quiz object'+quiz);
        await quiz.save();
        res.json({message: "Quiz created"});
    }
    catch(err) {
        console.log(err);
        next(); // ?? should i be fwd he error obj so it get caugh in app.js ?
    }
};

exports.getAllQuizzes = async (req, res, next) => {
    try{
    const quizzes = Quiz.find({}, (err, quiz) => {
        let quizMap = [];
        
        quiz.forEach((quiz) => {
            //console.log("Entry number"+quiz);
            quizMap.push(quiz);
        });
        //console.log(quizMap);
        return res.json(quizMap);
    });
    //console.log(quizzes);
    //res.json(quizzes);
    }catch(err){
        console.log(err);
        next();
    }
}