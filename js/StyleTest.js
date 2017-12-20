import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";


export default class LotsOfStyles extends Component {
    render() {
        return(
            <View>
                <Text style={styles.red}>red</Text>
                <Text style={styles.bigblue}>red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 35,
    },
    red: {
        color: 'red'
    },
});