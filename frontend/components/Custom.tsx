import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Question from "./question";
import { TQuestion } from "../types/Question";
import {postQuestions} from "./ducks";

export default function CustomModus({route, navigation}: any) {
  const [isClicked, setIsClicked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState<Array<TQuestion>>([]);
  const [error, setError] = useState(false);
  const [points, setPoints] = useState(0);

  const handleQuestions = (difficulty: string) => {
    switch(difficulty){
        case "easy":
            setPoints(points + 1);
            break;
        case "medium": 
            setPoints(points + 2);
            break;
        case "hard": 
            setPoints(points + 3);
            break;
        default: 
            break;
    };
}

  useEffect(() => {
      postQuestions(route.params.questionCount, route.params.difficulties, route.params.categories).then((res:any) => {
          setQuestions(res);
      })
  }, []);

    const nextRound = () => {
      if(questionIndex < questions.length - 1)
        setQuestionIndex(questionIndex + 1);
      else
        setIsFinished(true);
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#EEABC4" }}>
        {error ? <Text>Errorrrrr!</Text> : !isFinished ? 
        <Question 
          questions={questions[questionIndex]} 
          nextRound={nextRound} 
          handleQuestions={handleQuestions} 
          points={points}>            
        </Question> : 
        <Text>Total Punktzahl: {points}</Text>}
      </View>
    );
  }

