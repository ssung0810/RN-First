import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import Btn from './HookButton';

const StyledInput = styled.TextInput`
    border: 1px solid #111111;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 24px;
`;

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let count = 0;

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        console.log("-=-=-=-=-=-=-=-= Mount -=-=-=-=-=-=-=-=");
        nameRef.current.focus();
        return () => console.log("-=-=-=-=-=-=-=-= UnMount -=-=-=-=-=-=-=-=");
    }, []);

    useEffect(() => {
        console.log('ing');
    }, [email]);

    const onSubmit = () => {
        alert('submit');
    };

    return (
        <>
            <StyledText>name: {name}</StyledText>
            <StyledText>email: {email}</StyledText>
            <StyledInput value={name} onChangeText={setName} placeholder='name' ref={nameRef} returnKeyType="next" onSubmitEditing={() => emailRef.current.focus()} />
            <StyledInput value={email} onChangeText={setEmail} placeholder='name' ref={emailRef} returnKeyType="done" onSubmitEditing={onSubmit} />
            <Btn title="count" onPress={() => count+1} />
        </>
    );
};

export default Form;