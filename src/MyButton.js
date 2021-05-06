import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types'
import {styles, orangeText} from './style.js'

const MyButton = ( {title, onPress, children} ) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={[styles.font, orangeText]}>
                    {children || title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: "default",
    onPress: () => alert("default"),
};


MyButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
}

export default MyButton;