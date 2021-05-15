import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Counter from './components/Counter';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function App() {
  return (
    <Container>
        <Counter></Counter>
    </Container>
  );
}

