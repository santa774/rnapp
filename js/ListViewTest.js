import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, SectionList} from "react-native";

class FlatListTest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: '大幅度'},
                        {key: '谔谔'},
                        {key: '呃呃呃'},
                        {key: '哈哈哈'},
                        {key: '有意义'},
                        {key: '呸呸呸'},
                        {key: '哦哦哦'},
                        {key: '摇一摇'},
                        {key: '急急急'},
                        {key: '来看酷酷'},
                        {key: '威威威威'},
                        {key: '谔谔谔谔'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                        {key: '柔柔弱弱'},
                    ]}
                    renderItem={({item}) =>
                        <View style={styles.itemContainer}>
                            <Text style={styles.item}>{item.key}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

export default class SectionListTest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', "John", 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        fontSize: 15,
        height: 30,
        alignItems: 'center',
    },
    sectionHeader: {
        fontSize: 20,
        color: 'red',
        height: 30,
        alignItems: 'flex-start',
    },
})