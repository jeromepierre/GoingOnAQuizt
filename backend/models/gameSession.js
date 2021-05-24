const fetch = require("node-fetch");
const createJsonResponse = require("../utils/JsonResponse");

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
  let frontEndQuestions = createJsonResponse.createJsonResponse(questions);
  return frontEndQuestions;
}

exports.createQuestions = createQuestions;
