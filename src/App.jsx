import React from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Form />
        <Todos />
      </div>
    </div>
  );
};

export default App;
