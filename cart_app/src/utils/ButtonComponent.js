import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

const ButtonComponent = ({ hasText, buttonStyle, imageStyle, textStyle, textValue, imageSource, activeOpacity, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} style={buttonStyle}>
            <Image source={imageSource} style={imageStyle} />
            {
                (hasText === true) ? <Text style={textStyle}>{textValue}</Text> : null

            }
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({});

export default ButtonComponent;