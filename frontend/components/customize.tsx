import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Customize({route, navigation}: any){
    const {modus} = route.params;
    const [questionCount, setQuestionCount] = useState(10);
    const handleSend = () => {        
        navigation.navigate(modus, {questionCount: questionCount});
    }
    return(
        <View style={{ flex: 1, justifyContent: "flex-start", backgroundColor: "#EEABC4", padding: 8 }}>
            <TextInput
                style={styles.input}
                onChangeText={(text :any) => setQuestionCount(text)}
                value={questionCount.toString()}
                keyboardType = "numeric"
            />
            <TouchableOpacity style={styles.btn} onPress={handleSend}>
                <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "#E15A97"
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