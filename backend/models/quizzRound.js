const EDifficulties = {
    hard: 3,
    medium: 2,
    easy: 1
}
const configureRound = (round) => {
    let numberOfHard = 0;
    let numberOfMedium = 0;
    let numberOfEasy = 0;
    switch(round.difficulties.length){
        case 3:
            numberOfHard = (Math.floor(Math.random() * (round.numberOfQuestions / 2)));
            numberOfEasy = numberOfHard;
            numberOfMedium = round.numberOfQuestions - numberOfHard - numberOfEasy;
            break;
        case 2:
            if (round.difficulties.includes("hard") && round.difficulties.includes("medium")) {
                numberOfHard = round.numberOfQuestions/2;
                numberOfMedium = round.numberOfQuestions - numberOfHard;
            } else if  (round.difficulties.includes("medium") && round.difficulties.includes("easy")){
                numberOfMedium = round.numberOfQuestions/2;
                numberOfEasy = round.numberOfQuestions - numberOfMedium;
            } else {
                numberOfHard = round.numberOfQuestions/2;
                numberOfEasy = round.numberOfQuestions - numberOfHard;
            }
            break;
        case 1:
            if (round.difficulties.includes("hard")) {
                numberOfHard = round.numberOfQuestions
            } else if  (round.difficulties.includes("medium")){
                numberOfMedium = round.numberOfQuestions;
            } else if (round.difficulties.includes("easy")){
                numberOfEasy = round.numberOfQuestions
            }
            break;
    }
    let Questionscombo = {
        'hard': numberOfHard,
        'medium' : numberOfMedium,
        'easy': numberOfEasy
    }

    return Questionscombo;
}

exports.configureRound = configureRound;
