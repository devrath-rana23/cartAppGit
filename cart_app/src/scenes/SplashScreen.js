import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import { LOGO_IMAGE } from "../assets/images/index";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Courseslist');
        }, 2000);
    }, [])

    return (
        <View
            style={styles.body}
        >
            <Image
                style={styles.logo}
                source={LOGO_IMAGE}
            >
            </Image>
            <Text
                style={styles.text}
            >
                Cart App
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
    },
})

export default SplashScreen;