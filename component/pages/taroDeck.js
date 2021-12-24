import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,} from 'react-native';
import CardsDeck from "../deck/cardsDeck";

const taroDeck = () => {
    return (
        <View style={styles.container}>
            <CardsDeck/>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
        },
    })
;

export default taroDeck