import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Question from "./question";
import axios from "axios";

export default function ClassicModus({route, navigation}: any) {
  const [isClicked, setIsClicked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
      async function fetchQuestion(){
        const result = await axios.post('http://localhost:3000/questions', {numberOfQuestions: route.params.questionCount});
        console.log(result);
        setQuestions(result.data);
      }
      fetchQuestion();
      // fetch('https://localhost:3000/questions', {
      //   method: 'POST',
      //   body: JSON.stringify({numberOfQuestions: route.params.questionCount})
      // }).then(function(response) {
      //   return response.json();
      // }).then(function(data) {
      //   setQuestions(data);
      }, []);
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

