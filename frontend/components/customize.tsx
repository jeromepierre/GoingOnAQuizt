import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SelectBox from 'react-native-multi-selectbox-typescript';
import { xorBy } from 'lodash';

export default function Customize({route, navigation}: any){
    const [questionCount, setQuestionCount] = useState(10);
    const [difficulties, setDifficulties] = useState<any>([]);

    const choseableDifficulties = [
        {item: "easy", id: "easy"},
        {item: "medium", id: "medium"},
        {item: "hard", id: "hard"},
    ]

    const handleSend = () => {        
        navigation.navigate("Custom", {questionCount: questionCount, difficulties: difficulties});
    }

    return(
        <View style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#EEABC4", padding: 8 }}>
            <View style={styles.inputContainer}>
                <Text>Anzahl Fragen: </Text>
                <TextInput                
                    style={styles.input}
                    onChangeText={(text :any) => setQuestionCount(text)}
                    value={questionCount.toString()}
                    keyboardType = "numeric"
                />    
            </View>
                <SelectBox
                    label="Wähle eine oder mehrere Schwierigkeiten"
                    options={choseableDifficulties}
                    selectedValues={difficulties}
                    onMultiSelect={onMultiChange()}
                    onTapClose={onMultiChange()}
                    isMulti
                />
            <TouchableOpacity style={styles.btn} onPress={handleSend}>
                <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity> 
        </View>
    )

    function onMultiChange() {
        return (item:any) => setDifficulties(xorBy(difficulties, [item], 'id'))
      }
    
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
        borderRadius: 4,
        backgroundColor: "#4D9DE0"
    },
    btnText:{
        fontSize: 17
    }
});