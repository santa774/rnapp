import {Image, Text, View} from "react-native";
import React, {Component} from "react";

export default class Bananas extends Component {
    render() {
        let path = {
            uri: "http://zb.91zibo.com/dxlebPHITFeoLPKTg3GPmA476GuhMNjn"
        };
        return (
            <View style={{alignItems: 'center'}}>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Greeting name='lucy'/>
                <Greeting name='jacky'/>
                <Greeting name='fiona'/>
                <Greeting name='github'/>
            </View>
        );
    }
}

class Greeting extends Component {
    render(){
        return (
            <Text>Hello {this.props.name}!!!</Text>
        );
    }
}


// AppRegistry.registerComponent("Bananas", () => Bananas);