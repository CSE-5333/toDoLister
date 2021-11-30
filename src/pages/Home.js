import React from "react";
//import Form from "../Components/Form";
import ToDoList from "../Components/ToDoList";
import "../App.css";
import {useAuth} from '../contexts/AuthContext'

function Home() {
  const {accessToken} = useAuth();
  console.log(accessToken)
  return (
    <div style={{ backgroundColor: "#9CC3D5FF", padding: "15px" }}>
      <div className="todoApp">
        <ToDoList />
      </div>
    </div>
  );
}

export default Home;
