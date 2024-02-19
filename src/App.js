import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete", todo)
  
    setTodos(todos.filter((e)=>{return e!==todo;}))
  }

  const addTodo = (title, desc) =>{
    let sno;
    if(todos.length === 0){
      sno = 1
    }
    else{
      sno = todos[todos.length-1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
  }

  

  const [todos, setTodos] = useState([])
  let myvariable = 345;
  return (
    <>
    <Router>
    <Header title="My Todos List" searchbar={false} />

    {/* <Routes>
      <Route exact path="/" render={()=>{
        return
        <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos = {todos} onDelete={onDelete}/>
        </>
      }}>
      </Route>
      <Route exact path="/about">
        <About />
      </Route>  
    </Routes> */}
    <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>
          } />
          <Route exact path="/about" element={<About />} />
    </Routes>


   
    <Footer/>
    </Router>
    </>
  );
}

export default App;
