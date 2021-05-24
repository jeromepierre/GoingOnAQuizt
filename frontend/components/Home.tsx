import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-around', backgroundColor: "#EEABC4" }}>
        <Text style={styles.title}>Going on a quizt</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Classic")}>
            <Text style={styles.btnText}>Klassischer Modus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Customize")}>
            <Text style={styles.btnText}>Custom Modus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("CustomizeTime")}>
            <Text style={styles.btnText}>Time challenge Modus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Leaderboard")}>
            <Text style={styles.btnText}>Leaderboard</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
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

export default HomeScreen;