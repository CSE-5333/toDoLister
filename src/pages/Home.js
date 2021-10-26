import React from "react";
//import Form from "../Components/Form";
import ToDoList from "../Components/ToDoList";
import "../App.css";

function Home() {
  return (
    <div style={{ backgroundColor: "#A4FAD2", padding: "15px" }}>
      <div className="todoApp">
        <ToDoList />
      </div>
    </div>
  );
}

export default Home;
