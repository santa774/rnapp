import React, {Component} from 'react';
import {Button, Text, StyleSheet, View} from "react-native";


export default class FetchTest extends Component {
    constructor(props){
        super(props);
        this.state = {showText: ''}
    }
    fetchData = (enableCallback) => {
        fetch('http://bbs.reactnative.cn/api/category/3')
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState=({
                    showText: jsonData.description,
                });
                console.log(jsonData.description);
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    fetchDataAsync = async () => {
        try {
            let response = await fetch('http://bbs.reactnative.cn/api/category/3');
            let jsonData = await response.json();
            console.log(jsonData.description);
            // return jsonData.description;
        }catch (err) {
            console.error(err)
        }
    };


    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex: 1}}>
                <Text style={styles.red}>React Native</Text>
                <Text style={styles.red}>{this.state.showText}</Text>
                <Button
                    style={{
                        backgroundColor: 'yellogreen',
                        width: 80,
                        height: 20,
                        padding: 10,
                        alignItems: 'center',
                    }}
                    title='fetch'
                    onPress={this.fetchDataAsync}
                />
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