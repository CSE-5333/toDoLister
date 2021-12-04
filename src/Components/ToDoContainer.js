import {IoCloseCircleSharp} from 'react-icons/io5';
import {BiEdit} from 'react-icons/bi';
import { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const ToDoContainer = ({todoLists,todoComplete, toDoRemove, toDoUpdate}) =>{
    const {currentUser} = useAuth();

    const [edit, setEdit] = useState({
        id:null,
        value:''
    });

    const submitHandle = value =>{
        toDoUpdate(edit.id, value)
        setEdit({
            id:null,
            value: '',

        })
        axios({
            method: 'post',
            url: 'http://localhost:5000/item/additem',
            data:{
                [edit.id] : value.text
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
    }
    if(edit.id){
        return <Form edit={edit} onsubmit = {submitHandle}/>
    }

    return(
        <>
        {todoLists.map((toDo,index) =>(
        <div className={toDo.isComplete?'todoClass complete': 'todoClass'} key={index}>
            <div key={toDo.id} onClick={()=>todoComplete(toDo.id)} style={{cursor:"pointer"}}>
                {toDo.text}

            </div>
            <div className = "icons">
                <IoCloseCircleSharp onClick={()=>toDoRemove(toDo.id)} className ="delete"/>
                <BiEdit onClick={()=>setEdit({id:toDo.id, value: toDo.text})} className ="edit"/>
            </div>

        </div>))}
        </>
    ); 




}

export default ToDoContainer;

