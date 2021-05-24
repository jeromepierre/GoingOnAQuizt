export type TQuestion = {
    question: string,
    answers: Array<TAnswer>
}

export type TAnswer = {
    answer: string,
    isCorrect: boolean,
}

export type THighscore = {
    _id: string,
    username: string,
    score: string,
    date: string
}