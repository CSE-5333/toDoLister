import { PinDropSharp } from '@mui/icons-material';

import React, {useState, useEffect, useRef} from 'react';
import { InputContainer,Button, Input } from './FormElements';


const Form= (props)=>{
    const [textInput, setInput] = useState(props.edit? props.edit.value:'');
    const inputRef = useRef(null);
    let button = 'Add';
    let value = false;
    if (props.edit){
        button = 'Update'
        value = true
    }
    
    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }
    const [key, setId] = useState(props.last_id+1);

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
            <Input type ="text" arg = {value}  value={textInput} onChange = {handleChange } ref={inputRef}></Input>
            <Button value = {value}>{button}</Button>
                 
        </InputContainer>
        

        </>
    );

}
export default Form;
