import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Question from "./question";
import axios from "axios";
import { TQuestion } from "../types/Question";
import {postQuestions} from "./ducks";

export default function TimeModus({route, navigation}: any) {
  const [isClicked, setIsClicked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState<Array<TQuestion>>([]);
  const [error, setError] = useState(false);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(parseInt(route.params.time));
  const [isStart, setIsStart] = useState(false);

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
          setIsStart(true);
      })
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if(isStart && time >= 0){
          setTime(time - 1);
      }
      if(time <= 0){
          setIsFinished(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  });


  async function fetchQuestion(){
    axios.post('http://192.168.0.220:3000/questions', {numberOfQuestions: route.params.questionCount}).then((response: any) => {
        console.log("resi: ", response.data);
        setQuestions(response.data);
    });
  }

    const nextRound = () => {
      if(questionIndex < questions.length - 1)
        setQuestionIndex(questionIndex + 1);
      else
        setIsFinished(true);
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#EEABC4" }}>
        {error ? <Text>Errorrrrr!</Text> : !isFinished ? 
        <View style={{flex: 1}}>
            {isStart ? <Text style={{fontSize: 20}}>Verbleibende Zeit: {time} Sekunden</Text> : undefined}
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

