import React, {Component} from 'react';
import {Animated, Text} from 'react-native';
import * as Easing from "react-native/Libraries/Animated/src/Easing";

function bar(x = 2, y = x) {
    return[x, y];
}

bar();

class FadeinView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1),
            springAnim: new Animated.ValueXY({x: 100, y: 100})
        };
    }


    componentDidMount() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 0,
                    duration: 2000,
                }
            ),
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 500,
                }
            ),
            Animated.spring(
                this.state.springAnim,
                {
                    toValue: {x: 200, y: 200},
                }
            ),

        ]).start();

    }

    render() {
        return (
            <Animated.View style={{...this.props.style, opacity: this.state.fadeAnim}}>
                {this.props.children }
            </Animated.View>
        );
    }
}

export default class AnimatedTest extends Component {
    render() {
        return (
            <FadeinView style={{width: 120, height:50, backgroundColor: 'blue'}}>
                <Text style={{width: 120, height:50, fontSize: 26}}>Fading in</Text>
            </FadeinView>
        );
    }
}