import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#2D3035',
        padding: 15,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#4B89DC',
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        color: '#fff',
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#4B89DC',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task