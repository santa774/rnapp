import React, {Component} from 'react'
import {View, StyleSheet} from "react-native";

export default class FlexBoxLayout extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'skyblue',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={styles.bgRed}/>
                    <View style={styles.bgGreen}/>
                    <View style={styles.bgBlue}/>
                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: 'powderblue',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                }}>
                    <View style={styles.bgRed}/>
                    <View style={styles.bgGreen}/>
                    <View style={styles.bgBlue}/>
                </View>

                <View style={{
                    flex: 3,
                    backgroundColor: 'steelblue',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <View style={{height: 50, backgroundColor: 'red'}}/>
                    <View style={{height: 50, backgroundColor: 'green'}}/>
                    <View style={{height: 50, backgroundColor: 'blue'}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgRed: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    },
    bgGreen: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
    },
    bgBlue: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },
});