import React, { useState, useEffect } from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';
import {getHighscores, getDailyHighscores, getWeeklyHighscores} from './ducks';
import {THighscore} from "../types/Question";
import {ELeaderboard} from "../types/ELeaderboard";


export default function LeaderBoard(){
    const [leaderboard, setLeaderboard] = useState<Array<THighscore>>([]);
    const [leaderboardWeekly, setLeaderboardWeekly] = useState<Array<THighscore>>([]);
    const [leaderboardDaily, setLeaderboardDaily] = useState<Array<THighscore>>([]);
    const [displayedLeaderboard, setDisplayedLeaderboard] = useState<Array<THighscore>>([]);
    const [activeBoard, setActiveBoard] = useState(ELeaderboard.alltime);

    useEffect(() => {
        getHighscores().then((res) => {           
            setLeaderboard(res);
            setDisplayedLeaderboard(res);
        });
        getDailyHighscores().then((res) => {
            setLeaderboardDaily(res);
        });
        getWeeklyHighscores().then((res) => {
            setLeaderboardWeekly(res);
        });
    }, [])

    const handleLeaderboard = (leaderboardParam: ELeaderboard) => {
        console.log(leaderboardParam, ELeaderboard.alltime);
        switch(leaderboardParam){
            case ELeaderboard.alltime:
                setDisplayedLeaderboard(leaderboard);
                setActiveBoard(ELeaderboard.alltime);
                break;
            case ELeaderboard.weekly:
                setDisplayedLeaderboard(leaderboardWeekly);
                setActiveBoard(ELeaderboard.weekly);
                break;
            case ELeaderboard.daily:
                setDisplayedLeaderboard(leaderboardDaily);
                setActiveBoard(ELeaderboard.daily);
                break;
        }
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#EEABC4" }}>
            {
                leaderboard == null 
                ? <ActivityIndicator size="large" color="#861388" /> 
                :
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>
                            <TouchableOpacity style={activeBoard === ELeaderboard.alltime ? styles.btn : styles.btnlight} onPress={() => handleLeaderboard(ELeaderboard.alltime)}>
                                <Text>
                                    All time
                                </Text>
                            </TouchableOpacity>
                        </DataTable.Title>
                        <DataTable.Title>
                            <TouchableOpacity style={activeBoard === ELeaderboard.weekly ? styles.btn : styles.btnlight} onPress={() => handleLeaderboard(ELeaderboard.weekly)}>
                                <Text>
                                    Weekly
                                </Text>
                            </TouchableOpacity>
                        </DataTable.Title>
                        <DataTable.Title>
                            <TouchableOpacity style={activeBoard === ELeaderboard.daily ? styles.btn : styles.btnlight} onPress={() => handleLeaderboard(ELeaderboard.daily)}>
                                <Text>
                                    Daily
                                </Text>
                            </TouchableOpacity>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Header>
                        <DataTable.Title>Username</DataTable.Title>
                        <DataTable.Title>Score</DataTable.Title>
                        <DataTable.Title>Datum</DataTable.Title>
                    </DataTable.Header>
                    {displayedLeaderboard.map((item) => {return (
                        <DataTable.Row key={item._id}>
                            <DataTable.Cell>{item.username}</DataTable.Cell>
                            <DataTable.Cell>{item.score}</DataTable.Cell>
                            <DataTable.Cell>{item.date}</DataTable.Cell>
                        </DataTable.Row>
                    )})}
                   
                </DataTable>
            }            
        </View>
    )
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
    btnlight:{
        height:50,
        backgroundColor:"#F9DEEA",
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