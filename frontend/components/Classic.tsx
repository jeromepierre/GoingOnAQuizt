import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Question from "./question";
import axios from "axios";

export default function ClassicModus({route, navigation}) {
  const [isClicked, setIsClicked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
      axios.post('localhost:3000/questions', {numberOfQuestions: route.params.questionCount}).then((res) => {setQuestions(res)}).catch((err) => {setError(true)});
  })

    const nextRound = () => {
      if(questionIndex < questions.length - 1)
        setQuestionIndex(questionIndex + 1);
      else
        setIsFinished(true);
  }
    // const questions = [
    //   {
    //     question: "Das ist die erste Frage",
    //     answers: [
    //       {
    //         answer: "nummmer 1 jakdsjfkljasdfj asjd ajsdklf aksjfklja dsfkjalksfdja",
    //         isCorrect: true,
    //       },
    //        {
    //         answer: "nummmer 2",
    //         isCorrect: false,
    //       },
    //        {
    //         answer: "nummmer 3asdfasdfasfasdfasdfsafsdafasdf",
    //         isCorrect: false,
    //       },
    //        {
    //         answer: "nummmer 4",
    //         isCorrect: false,
    //       }
    //     ]
    //   },
    //   {
    //     question: "Das ist die zweite Frage",
    //     answers: [
    //       {
    //         answer: "nummmer 1",
    //         isCorrect: true,
    //       },
    //        {
    //         answer: "nummmer 2",
    //         isCorrect: false,
    //       },
    //        {
    //         answer: "nummmer 3",
    //         isCorrect: false,
    //       },
    //        {
    //         answer: "nummmer 4",
    //         isCorrect: false,
    //       }
    //     ]
    //   }
    // ]
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#EEABC4" }}>
        {error ? <Text>Errorrrrr!</Text> : !isFinished ? <Question questions={questions[questionIndex]} nextRound={nextRound}></Question> : <Text>Feeertig</Text>}
      </View>
    );
  }

