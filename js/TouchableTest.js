import React, {Component} from 'react'
import {Image, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonTextColor: 'black'};
    }

    _onPressButton() {
        this.setState = ({
            buttonTextColor: 'white',
        });
        console.log("you'are press TouchableHighlight now!");
    }

    _onShowUnderlay() {
        console.log("you'are _onShowUnderlay now!");
    }

    _onHideUnderlay() {
        console.log(`you'are _onHideUnderlay now!`);
    }

    render() {
        let textColor = {color: this.state.buttonTextColor};
        return (
            <TouchableHighlight
                underlayColor='lightgreen'
                onPress={this._onPressButton}
                onShowUnderlay={this._onShowUnderlay}
                onHideUnderlay={this._onHideUnderlay}
                style={{width: 150, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={textColor}>TouchableHighlight</Text>
            </TouchableHighlight>
        );
    }
}

class MyFeedbackButton extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonTextColor: 'black'};
    }

    _onPressButton() {
        this.setState = ({
            buttonTextColor: 'white',
        });
        console.log("you'are press TouchableNativeFeedback now!");
    }

    render() {
        let textColor = {color: this.state.buttonTextColor};
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this._onPressButton}>
                <View style={{
                    width: 190,
                    height: 30,
                    backgroundColor: 'wheat',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={textColor}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

class MyOpacityButton extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonTextColor: 'black'};
    }

    _onPressButton() {
        this.setState = ({
            buttonTextColor: 'white',
        });
        console.log("you'are press TouchableOpacity now!");
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this._onPressButton}
                activeOpacity={0.1}>
                <Image source={{uri: 'http://zb.91zibo.com/dxlebPHITFeoLPKTg3GPmA476GuhMNjn'}}
                       style={{width: 100, height: 100}}/>
            </TouchableOpacity>
        );
    }
}

export default class TouchableTest extends Component {
    render() {
        return (
            <View>
                <MyButton/>
                <MyFeedbackButton/>
                <MyOpacityButton/>
            </View>

        );
    }
}