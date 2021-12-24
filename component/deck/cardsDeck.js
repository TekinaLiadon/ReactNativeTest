import React from "react";
import {StyleSheet, Text, View, Image, Dimensions, Animated, Easing, SafeAreaView} from "react-native";
import {
    ScrollView,
} from "native-base"
import Card from "./card";
import Footer from "../footer/footer";

const cardsDeck = () => {
    return (
        <ScrollView>
            <ScrollView contentContainerStyle={styles.containerFlexbox}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerFlexbox: {
        flex: 1,
        flexWrap: "wrap",
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    ScrollView: {
        width: '100%',
    },
});

export default cardsDeck;