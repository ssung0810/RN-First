import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles, Container} from './style.js';
import Input from './Input';


export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  return (
    <Container>
      <Input></Input>
    </Container>
  );
}

