import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';

const Shadow = () => {
    return (
        <View style={styles.shadow}>
            <Text>{Platform.os === 'ios' ? 'ios' : 'android'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: '#ffffff',
        width: 200,
        height: 200,
        ...Platform.select (
            {
                ios: {
                    backgroundColor: 'red',
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                },
                android: {
                    backgroundColor: 'green',
                    elevation: 10,
                }
            }
        )

        
    }
})

export default Shadow;