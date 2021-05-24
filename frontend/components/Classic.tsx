import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Question from "./question";
import { TQuestion } from "../types/Question";
import {postHighscore, postQuestions} from "./ducks";

export default function ClassicModus({route, navigation}: any) {
  const [isClicked, setIsClicked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState<Array<TQuestion>>([]);
  const [error, setError] = useState(false);
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState("");

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
      postQuestions(10).then((res:any) => {
          setQuestions(res);
      })
  }, []);

    const nextRound = () => {
      if(questionIndex < questions.length - 1)
        setQuestionIndex(questionIndex + 1);
      else
        setIsFinished(true);
  }

  const handleHighscore = () => {
    postHighscore(username, points, new Date());
    navigation.navigate("Leaderboard");
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
        <View>
          <Text>Total Punktzahl: {points}</Text>
          <View style={styles.inputContainer}>
                <Text>Username: </Text>
                <TextInput                
                    style={styles.input}
                    onChangeText={(text :any) => setUsername(text)}
                    value={username}
                />    
            </View>
          <TouchableOpacity style={styles.btn} onPress={() => handleHighscore()}>
              <Text style={styles.btnText}>Punktzahl zum Leaderboard hinzufügen</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    );
  }

  const styles = StyleSheet.create({
    inputContainer:{
      flex: 1,
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: "center",
  },
  input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  backgroundColor: "#E15A97",
  width: 100
},
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: "#861388"
    },
    btn:{
        height:50,
        backgroundColor:"#E15A97",
        alignItems:'center',
        justifyContent:'center', 
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    btnText:{
        color: "#4B2840",
        fontSize: 30
    }
})