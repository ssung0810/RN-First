import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    background-color: #778bdd;
    padding: 10px;
    margin: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: #fff;
`;

const Button_s = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Title>{title}</Title>
            </Container>
        </TouchableOpacity>
    );
};

export default Button_s;