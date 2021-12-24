import {Dimensions, Image, StyleSheet, View,} from "react-native";
import React from "react";
import ModalInfo from './cardInfo'

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const Card = () => {
    return (
        <View style={styles.box}>
            <ModalInfo text="Описание карты"/>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: windowW / 2.3,
        height: windowH / 4,
        margin: 10,
    },
    img: {
        width: '100%',
        height: '100%',
    },
});

export default Card