import React, {Component} from 'react'
import {Text} from "react-native";

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        //每1000毫秒状态做一次取反操作
        setInterval(() => {
            this.setState(preState => {
                return {showText: !preState.showText};
            });
        }, 400);
    }

    render() {
        //根据当前的showText去显示text内容
        let display = this.state.showText ? this.props.str : this.props.str;
        let textColor = this.state.showText ? {color: 'lightgreen'} : {color: 'orange'};
        return (
            <Text style={textColor}>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <Blink str='I want to move it!!!'/>
        );
    }
}