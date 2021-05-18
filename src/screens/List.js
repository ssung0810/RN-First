import React from 'react';
import styled from 'styled-components/native';
import Button_s from '../components/Button';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: #fff; */
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin: 10px;
`;

const items = [
    {id: 1, name: 'React Native'},
    {id: 2, name: 'Expo'},
    {id: 3, name: 'Navigation'},
]

const List = ({navigation}) => {
    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map(
                ({id, name}) => 
                <Button_s 
                    key={id} 
                    title={name} 
                    onPress={() => navigation.navigate('Chat', {id, name})}
                />
            )}
        </Container>
    )
}

export default List;