import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SelectBox from 'react-native-multi-selectbox-typescript';
import { RadioButton } from 'react-native-paper';
import { xorBy } from 'lodash';
import {getCategories} from "./ducks";


export default function CustomizeTime({route, navigation}: any){
    const [difficulties, setDifficulties] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [selectedCategories, setSelectedCategories] = useState<any>([]);
    const [time, setTime] = useState("30");

    const choseableDifficulties = [
        {item: "easy", id: "easy"},
        {item: "medium", id: "medium"},
        {item: "hard", id: "hard"},
    ]

    useEffect(() => {
        getCategories().then((res:any) => {
            setCategories(res);
        })
    }, [])

    const handleSend = () => {        
        navigation.navigate("Time", {questionCount: 50, difficulties: difficulties, categories: selectedCategories, time: time});
    }

    return(
        <View style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#EEABC4", padding: 8 }}>
            <View style={styles.inputContainer}>
               <RadioButton
                 value="30"
                 status={time === "30" ? "checked" : "unchecked"}
                 onPress={() => setTime("30")} 
                />
                <Text>30 Sekunden</Text>
             </View>
             <View style={styles.inputContainer}>
               <RadioButton
                 value="60"
                 status={time === "60" ? "checked" : "unchecked"}
                 onPress={() => setTime("60")} 
                />
                <Text>60 Sekunden</Text>
             </View>
             <View style={styles.inputContainer}>
               <RadioButton
                 value="90"
                 status={time === "90" ? "checked" : "unchecked"}
                 onPress={() => setTime("90")} 
                />
               <Text>90 Sekunden</Text>
             </View>
             <View style={styles.inputContainer}>                
               <RadioButton
                 value="120"
                 status={time === "120" ? "checked" : "unchecked"}
                 onPress={() => setTime("120")} 
                />
                <Text>2 Minuten</Text>
             </View>
                <SelectBox
                    label="Wähle eine oder mehrere Schwierigkeiten"
                    options={choseableDifficulties}
                    selectedValues={difficulties}
                    onMultiSelect={onDifficultyChange()}
                    onTapClose={onDifficultyChange()}
                    isMulti
                />
                 <SelectBox
                    label="Wähle eine oder mehrere Schwierigkeiten"
                    options={categories}
                    selectedValues={selectedCategories}
                    onMultiSelect={onCategoryChange()}
                    onTapClose={onCategoryChange()}
                    isMulti
                />
            <TouchableOpacity style={styles.btn} onPress={handleSend}>
                <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity> 
        </View>
    )

    function onDifficultyChange() {
        return (item:any) => setDifficulties(xorBy(difficulties, [item], 'id'))
      }
    
    function onCategoryChange() {
        return (item:any) => setSelectedCategories(xorBy(selectedCategories, [item], 'id'))
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