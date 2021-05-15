import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Container = styled.View`
    background-color: #778bdd;
    padding: 10px;
    margin: 10px;
`;

const StyledText = styled.Text`
    font-size: 24px;
    color: #fff;
`;

const Btn = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <StyledText>{title}</StyledText>
            </Container>
        </TouchableOpacity>
    );
};

Btn.propTypes = {
    title: PropTypes.string,
}

export default Btn;