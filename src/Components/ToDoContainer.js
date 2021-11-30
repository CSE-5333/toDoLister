import {IoCloseCircleSharp} from 'react-icons/io5';
import {BiEdit} from 'react-icons/bi';
import { useState } from 'react';
import Form from './Form';
const ToDoContainer = ({todoLists,todoComplete, toDoRemove, toDoUpdate}) =>{

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

