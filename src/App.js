import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import {styles} from './style.js';
import Input from './Input';
import styled, {ThemeProvider} from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.bgColor};
    align-items: center;
    justify-content: center;
`;

const lightTheme = {
  inputColor: '#111111',
  inputBorder: '#111111',
  bgColor: '#e3e3e3',
};

const darkTheme = {
  inputColor: '#e3e3e3',
  inputBorder: '#e3e3e3',
  bgColor: '#111111',
};

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);
  const [isLight, toggleTheme] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Container>
        <Switch 
          value={isLight} 
          onValueChange={isLight => toggleTheme(isLight)}>
        </Switch>
        <Input placeholder="ppp"></Input>
      </Container>
    </ThemeProvider>
  );
}

