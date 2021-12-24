import React, {useState} from 'react';
import {Dimensions, Image, Pressable, StyleSheet, Text, View,} from 'react-native';

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('TaroDeck')}
            >
                <Image source={require('../../img/cover.jpg')} style={styles.cover}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        cover: {
            width: windowW / 3.3,
            height: windowH / 4,
        },
    })
;

export default Home