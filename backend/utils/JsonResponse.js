const shuffle = require("./shuffle");

const createJsonResponse = (questions) => {
    let frontEndQuestions = [];
    questions.map((question) => {
        let answersObject = [];
        let questionJson = {
            question: question[0]["question"],
            difficulty: question[0]["difficulty"],
            answers: [],
        };
        let incorrectAnswers = question[0]["incorrect_answers"];
        let correctAnswers = question[0]["correct_answer"];
        incorrectAnswers.map((answer) => {
            answersObject.push({answer: answer, isCorrect: false});
            questionJson.answers.push({answer: answer, isCorrect: false});
        });
        answersObject.push({answer: correctAnswers, isCorrect: true});
        questionJson.answers = shuffle.shuffle(answersObject);
        frontEndQuestions.push(questionJson);
    });
    return frontEndQuestions;
}

exports.createJsonResponse = createJsonResponse;