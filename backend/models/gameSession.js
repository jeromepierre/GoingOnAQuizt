const fetch = require("node-fetch");

async function createQuestions(round, categories) {
  let questions = [];
  let category;
  for (const [key, value] of Object.entries(round)) {
    for (i = 0; i < value; i++) {
      category =
        categories.length > 0
          ? "&category=" +
            categories[Math.floor(Math.random() * categories.length)]
          : "";
      await fetch(
        `https://opentdb.com/api.php?amount=1${category}&difficulty=${key}`
      )
        .then((response) => response.json())
        .then((json) => {
          questions.push(json.results);
        });
    }
  }
  console.log(questions);
  let frontEndQuestions = [];
  questions.map((question) => {
    let questionJson = {
      question: question[0]["question"],
      difficulty: question[0]["difficulty"],
      answers: [],
    };
    let incorrectAnswers = question[0]["incorrect_answers"];
    let correctAnswers = question[0]["correct_answer"];
    incorrectAnswers.map((answer) => {
      questionJson.answers.push({ answer: answer, isCorrect: false });
    });
    questionJson.answers.push({ answer: correctAnswers, isCorrect: true });
    frontEndQuestions.push(questionJson);
  });
  return frontEndQuestions;
}

exports.createQuestions = createQuestions;
