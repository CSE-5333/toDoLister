import React, { useState, useEffect } from "react";
import Form from "./Form";
import ToDoContainer from "./ToDoContainer";
import logo from '../Assets/todo-icon.png';
import { Grid, Button } from "@mui/material";
import { useHistory } from 'react-router';
import { useAuth } from "../contexts/AuthContext";
import axios from 'axios';




const ToDoList = () => {
    const { logout, currentUser } = useAuth();
    const [last_id, setlast_id] = useState(null)
    //var  last_id =0

    const [todoLists, setTodoLists] = useState([])
   
    let history = useHistory();
    const logoutfunction = () => {
        logout()
            .then((response) => {
                console.log(response)
                history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })


    }

    const addToDo = (toDo) => {
        // removes unwanted space at the front and back of the sentence
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }

        const newTodoLists = [toDo, ...todoLists];
        setTodoLists(newTodoLists);
        console.log(toDo, ...todoLists);
        axios({
            method: 'post',
            url: 'api/item/additem',
            data:{
                [toDo.id] : toDo.text
            },
            headers:{
                authorization:"Bearer "+ currentUser.accessToken
            },
            
            })
            .then((response) => {
                //setlast_id(toDo.id)

                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })



    }
    const toDoRemove = (id) => {
        const newtoDoArray = [...todoLists].filter(toDo => toDo.id !== id)

        setTodoLists(newtoDoArray)
        axios({
            method: 'post',
            url: 'api/item/deleteitem',
            data: {
                listid: id
            },
            headers: {
                authorization: "Bearer " + currentUser.accessToken
            },

        })
            .then((response) => {

                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })


    }

    const toDoUpdate = (id, newValue) => {
        // removes unwanted space at the front and back of the sentence
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        newValue['id'] = id

        setTodoLists(prev => prev.map(item => (item.id === id ? newValue : item)))
    

    }
    const todoComplete = (id) => {

        let toDoListsUpdated = todoLists.map(toDo => {
            if (toDo.id === id) {
                toDo.isComplete = !toDo.isComplete
            }
            return toDo;
        })
        setTodoLists(toDoListsUpdated);

    }
    useEffect(() => {


        axios({
            method: 'get',
            url: 'api/item/allitems',
            headers: {
                authorization: "Bearer " + currentUser.accessToken
            }
        })
            .then((response) => {

                console.log(response)
                setTodoLists(response.data)
                
                setlast_id(parseInt(response.data[0].id))

            })
            .catch((error) => {
                console.log(error)
                setlast_id(0)
            })


    },[]);
    if(last_id === null) return null;



    return (

        <>
        
      

            <Grid container justifyContent="flex-end">
                <Button variant="contained" onClick={logoutfunction}>Logout</Button>
            </Grid>
            <h2>Let's organize your life.</h2>
            <img src={logo} alt="logo" height="100px" width="100px" style={{ margin: "0 auto" }} />
            <Form onsubmit={addToDo} last_id={last_id} todoLists = {todoLists} />
            <ToDoContainer todoLists={todoLists} todoComplete={todoComplete} toDoRemove={toDoRemove} toDoUpdate={toDoUpdate} />

        </>
    );
}
export default ToDoList;
