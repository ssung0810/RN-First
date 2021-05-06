import {StyleSheet} from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #e2e2e2;
    align-items: center;
    justify-content: center;
`;

export const StyledText = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: blue;
`;

export const StyledButton = styled.Button`
    margin: 10px;
    padding: 10px;

`;

export const styles = StyleSheet.create({
    /* container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }, */

    button: {
        backgroundColor: 'red', margin:10, padding: 10
    },
    font: {
        fontSize:20, color:"white",
    }
});

export const orangeText = {
    color: 'orange',
}