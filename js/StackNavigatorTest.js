import React, {Component} from 'react';
import {Button, Image, ImageBackground, Text, View} from "react-native";
import {StackNavigator} from "react-navigation";


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Page</Text>
                <Button
                    onPress={() => navigate('Detail', {info: 'hi,john!!!'})}
                    title= 'go to Detail'
                />
            </View>
        );
    }
}


class DetailScreen extends Component {
    static navigationOptions  = ({navigation}) => ({
        title: `Detail ${navigation.state.params.info}`,
    });

    render() {
        const {params} = this.props.navigation.state;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={require('../image/bg_login.jpg')} style={{width: 150, height: 150, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>Detail Page {params.info}</Text>
                </ImageBackground>
                <Image source={(require('../image/attention.png'))}/>
                <Image source={{uri: 'ssdk_oks_classic_qq'}} style={{width: 50, height: 50}}/>
                <Image source={{uri: 'http://zb.91zibo.com/dxlebPHITFeoLPKTg3GPmA476GuhMNjn'}} style={{width: 100, height: 100}}/>
            </View>
        );
    }
}

const RootNavigator = StackNavigator({
    Home: {screen: HomeScreen,},
    Detail: {screen: DetailScreen,}
});

export default RootNavigator;