const Quiz = require('../models/quiz');

exports.createQuiz = async (req, res, next) => {
    console.log(req.body);
    const question = req.body.question;
    const answers = req.body.answers;
    try {
        // throw({statusCode: 512, message: "Error creating Quiz", data: "Maybe a not string array"});
        const quiz = new Quiz({
            question: question,
            answers: answers
        });
        console.log('new Quiz object'+quiz);
        await quiz.save();
        res.json({message: "Quiz created"});
    }
    catch(err) {
        // console.log(err); 
        next(err); // ?? should i be fwd he error obj so it get caugh in app.js ?
    }
};

exports.getAllQuizzes = async (req, res, next) => {
    try{
    const quizzesQuery = Quiz.find({});
    const quizzes = await quizzesQuery.exec();
    // const quizzes = Quiz.find({}, (err, quiz) => {
    //     // let quizMap = [];
        
    //     // quiz.forEach((quiz) => {
    //     //     //console.log("Entry number"+quiz);
    //     //     quizMap.push(quiz);
    //     // });
    //     //console.log(quizMap);
    //     //console.log(quiz);
    //     return quiz;
    // });
    //res.render('index', {quizzes: quizzes});
    console.log(quizzes);
    res.json(quizzes[0].answers[0]);
    }catch(err){
        console.log(err);
        next();
    }
}