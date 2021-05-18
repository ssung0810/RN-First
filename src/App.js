import React, {createContext} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Navigation from './navigations';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  return (
    <Navigation /> 
  );
};

