import { PinDropSharp } from '@mui/icons-material';

import React, {useState, useEffect, useRef} from 'react';
import { ToDoListHolder, InputContainer,Button, Input } from './FormElements';



const Form= (props)=>{
    const [textInput, setInput] = useState(props.edit? props.edit.value:'');
    const inputRef = useRef(null);
    let button = 'ADD';
    let value = false;
    if (props.edit){
        button = 'UPDATE'
        value = true
    }

    
    useEffect(()=>{
        inputRef.current.focus()
    })

  

    const [key, setId] = useState(1 );
    const handleInput =(e) =>{
        e.preventDefault();
        setId(key+1)
        props.onsubmit({
            id:key ,
            text: textInput

        });

        setInput('');
    };
    return(
        <>
        <InputContainer onSubmit={handleInput}>
            <Input type ="text" arg = {value}  value={textInput} onChange = {e=>setInput(e.target.value) } ref={inputRef}></Input>
            <Button value = {value}>{button}</Button>
                 
        </InputContainer>
        

        </>
    );

}
export default Form;
