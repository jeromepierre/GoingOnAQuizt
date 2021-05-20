import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AnswerButton from "./answerButton";

export default function Question({questions, nextRound}){
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        nextRound();
        setIsPressed(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{questions.question}</Text>
            <View style={styles.answerContainer}>
                {questions.answers.map((option, index) => {
                    return(
                         <TouchableOpacity style={[styles.btn, {backgroundColor: isPressed ? option.isCorrect ? "#549F93" : "#f93e58" : "#4D9DE0"}]} onPress={() => setIsPressed(true)} key={index}>
                            <Text style={styles.btnText}>{option.answer}</Text>
                         </TouchableOpacity>                         
                    )})}
                    {isPressed ? <TouchableOpacity style={styles.btn} onPress={() => handlePress()}>
                            <Text style={styles.btnText}>Weiter</Text>
                         </TouchableOpacity> : undefined}                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 30,
        color: "#861388",
        marginBottom: 10
    },
    answerContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 5
    },
     btn:{
        height: "auto",
        width: 170,
        alignItems:'center',
        justifyContent:'center', 
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 4
    },
    btnText:{
        fontSize: 17
    }
})