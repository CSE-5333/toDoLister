import React, {useState} from "react";
import Form from "./Form";
import ToDoContainer from "./ToDoContainer";
import logo from '../Assets/todo-icon.png';

const ToDoList = () =>{
    const [todoLists, setTodoLists] = useState([])

    const addToDo = (toDo) =>{
        // removes unwanted space at the front and back of the sentence
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return;
        }

        const newTodoLists = [toDo, ...todoLists];
        setTodoLists(newTodoLists);
        console.log(toDo,...todoLists);
    

    }
    const toDoRemove =(id) =>{
        const newtoDoArray = [...todoLists].filter(toDo =>toDo.id !==id)

        setTodoLists(newtoDoArray)

    }

    const toDoUpdate = (id, newValue) =>{
         // removes unwanted space at the front and back of the sentence
         if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodoLists(prev =>prev.map(item=>(item.id===id ? newValue:item)))

    }
    const todoComplete = (id) =>{

        let toDoListsUpdated = todoLists.map(toDo =>{
            if(toDo.id === id){
                toDo.isComplete = !toDo.isComplete
            }
            return toDo;
        })
        setTodoLists(toDoListsUpdated);

    }
    


    return(
        <>
            <h1>Let's organize your life.</h1>
            <img src={logo} alt="logo" height="100px" width="100px" style={{margin: "0 auto"}} />
            <Form onsubmit={addToDo}/>
            <ToDoContainer todoLists={todoLists} todoComplete= {todoComplete} toDoRemove = {toDoRemove} toDoUpdate={toDoUpdate}/>
        </>
    );
}
export default ToDoList;