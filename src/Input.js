import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    padding: 20px;
    font-size: 20px;
    border: 1px solid #111111;
`;

const Input = () => {
    return <StyledInput placeholder="Enter a Text.." placeholderTextColor="#111111" />
}

export default Input;