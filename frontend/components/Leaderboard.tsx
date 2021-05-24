import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { DataTable } from 'react-native-paper';
import { getHighscores } from './ducks';
import {THighscore} from "../types/Question";


export default function LeaderBoard(){
    const [leaderboard, setLeaderboard] = useState<Array<THighscore>>([]);
    useEffect(() => {
        getHighscores().then((res) => {           
            setLeaderboard(res);
        })
    }, [])

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#EEABC4" }}>
            {
                leaderboard == null 
                ? <ActivityIndicator size="large" color="#861388" /> 
                : 
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Username</DataTable.Title>
                        <DataTable.Title>Score</DataTable.Title>
                        <DataTable.Title>Datum</DataTable.Title>
                    </DataTable.Header>
                    {leaderboard.map((item) => {return (
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