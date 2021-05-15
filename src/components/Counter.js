import React, {useState} from 'react';
import styled from 'styled-components/native';
import Btn from './HookButton';

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <StyledText>count : {count}</StyledText>
            <Btn 
                title='+' 
                onPress={() => {
                    setCount(count => {
                        return count+1;
                    });
                    setCount(count => {
                        return count+1;
                    });
                }}
            />
            <Btn 
                title='-' 
                onPress={() => setCount(count-1)}
            />
        </>
    );
};

export default Counter;