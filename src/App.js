import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Counter from './components/Counter';
import Btn from './components/HookButton';
import Form from './components/Form';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Container>
      <Btn
        title='on/off' 
        onPress={() => setIsVisible(prev => !prev)} 
      />
      {isVisible && <Form />}
    </Container>
  );
}

