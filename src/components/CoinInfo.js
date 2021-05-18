import React from 'react';
import styled from 'styled-components/native';

const Conatainer = styled.View`
    width:100%;
    padding: 10px 20px;
    flex-direction: row;
    justify-content : space-between;
`;

const StyledText = styled.Text`
    font-size: 20px;
    font-weight: ${({bold}) => (bold ? '600' : '400')};
`;

const CoinInfo = ({symbol, name, price}) => {
    return (
        <Conatainer>
            <StyledText>{symbol} ({name})</StyledText>
            <StyledText bold>${price.toLocaleString()}</StyledText>
        </Conatainer>
    );
};

export default CoinInfo;