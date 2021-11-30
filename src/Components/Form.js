import { PinDropSharp } from '@mui/icons-material';

import React, {useState, useEffect, useRef} from 'react';
import { ToDoListHolder, InputContainer,Button, Input } from './FormElements';
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext';



const Form= (props)=>{
    const {currentUser} = useAuth();
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

  

    const [key, setId] = useState(1 );
    const handleInput =(e) =>{
        e.preventDefault();
        setId(key+1)
        props.onsubmit({
            id:key ,
            text: textInput

        });
        axios({
            method: 'post',
            url: 'http://localhost:5000/item/additem',
            data:{
                [key] : textInput
            },
            headers:{
                authorization:"Bearer "+ currentUser.accessToken
            },
            
            })
            .then((response) => {

                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })


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
