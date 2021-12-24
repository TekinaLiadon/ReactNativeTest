import React, { useState } from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, Dimensions} from "react-native";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const ModalInfo = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Скрыть карту</Text>
                        </Pressable>
                        <Image source={require('../../img/flan2.jpeg')} style={styles.img}/>
                        <Text>{props.text}</Text>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Image source={require('../../img/cover.jpg')} style={styles.cover}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: windowW / 1.4,
        height: windowH / 1.4,
    },
    cover: {
        width: windowW / 3.3,
        height: windowH / 4,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ModalInfo;