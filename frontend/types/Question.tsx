export type TQuestion = {
    question: string,
    answers: Array<TAnswer>
}

export type TAnswer = {
    answer: string,
    isCorrect: boolean,
}