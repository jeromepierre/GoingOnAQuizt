import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Question from "./question";
import { TQuestion } from "../types/Question";
import {postQuestions} from "./ducks";
import useCountDown from "react-countdown-hook";

export default function TimeModus({route, navigation}: any) {
  const [isClicked, setIsClicked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState<Array<TQuestion>>([]);
  const [error, setError] = useState(false);
  const [points, setPoints] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timeLeft, actions] = useCountDown(route.params.time, 1000);

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
      // fetchQuestion();
      postQuestions(route.params.questionCount, route.params.difficulties, route.params.categories).then((res:any) => {
          setQuestions(res);
          actions.start(route.params.time * 1000);
          setIsStart(true);
      })
  }, []);

  useEffect(() => {
      if(timeLeft <= 0 && isStart){
          console.log("finished")
          setIsFinished(true);
      }
  },[timeLeft]);

    const nextRound = () => {
      if(questionIndex < questions.length - 1)
        setQuestionIndex(questionIndex + 1);
      else
        setIsFinished(true);
        console.log("finished");
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#EEABC4" }}>
        {error ? <Text>Errorrrrr!</Text> : !isFinished ?
        <View style={{flex: 1}}>
            {isStart ? <Text style={{fontSize: 20}}>Verbleibende Zeit: {timeLeft/1000} Sekunden</Text> : undefined}
        <Question 
          questions={questions[questionIndex]} 
          nextRound={nextRound} 
          handleQuestions={handleQuestions} 
          points={points}>            
        </Question> 
        </View>
        : 
        <Text>Total Punktzahl: {points}</Text>}
      </View>
    );
  }

