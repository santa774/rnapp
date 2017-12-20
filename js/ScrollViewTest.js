import {Image, ScrollView, Text} from "react-native";
import React, {Component} from "react";

export default class ScrollViewTest extends Component {
    render() {
        let path = {
            uri: "http://zb.91zibo.com/dxlebPHITFeoLPKTg3GPmA476GuhMNjn"
        };
        return (
            <ScrollView>
                <Greeting name='lucy'/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Greeting name='jacky'/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Greeting name='fiona'/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Greeting name='github'/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
                <Image source={path} style={{height: 180, width: 180}}/>
            </ScrollView>
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