import React, {Component} from 'react';
import {Text, TextInput, View} from "react-native";

export default class TextInputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translator!"
                    onChangeText={(text) =>
                        this.setState({text})
                    }
                />

                <Text style={{padding: 30, fontSize: 28}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}