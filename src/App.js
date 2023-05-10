import './App.css';
import Info from './components/info/info.js';
import TodoList from './components/todoList/todolist.js';
import { useState } from 'react';

function App() {

  const [todos,setTodos] = useState([
    {
      id: 1,
      taskName : "react",
      checked : false,
      isSelected: false,
      isModify: false
    },
    {
      id: 2,
      taskName : "JS",
      checked : false,
      isSelected: false,
      isModify: false
    }

  ]),
  [nbDone, setNbDone] = useState(0), // tache à faire donc checked = true 
  [nbToDo, setToDo] = useState(2), // tâche faite donc checked = false 
  [selected,setselected] = useState(false), // filtre Active
  [selected1,setselected1] = useState(true), // filtre All
  [selected2,setselected2] = useState(false) // filtre completed
  // ajouter une tâche 

  const addList = (event) => {
    if( event.key === "Enter" && event.target.value != "" && event.target.value != " "){
      const newTodos = [
        {
          id: nbDone + nbToDo +1,
          taskName : event.target.value,
          checked: false,
        },
        ...todos
      ]

      setTodos(newTodos)

      setToDo(nbToDo + 1)

      event.target.value = "";
    }
  }

  // update la liste quand elle est faite

  const onToggleDone = (id) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        todo.checked = !todo.checked;
        if(todo.checked === true){
          setNbDone(nbDone+1);
          setToDo(nbToDo-1)
        }else{
          setNbDone(nbDone-1);
          setToDo(nbToDo+1)
        }
      }
      return todo
    })

    setTodos(newTodos);
  }

  // suprimer le todo de la list

  const removeTodo = (id) => {
    todos.map(todo =>{
      if(todo.id === id){
        if(todo.checked === true){
          setNbDone(nbDone-1);
        }else{
          setToDo(nbToDo-1)
        }
      }
      return todo;
    })
    const newList  = todos.filter(todo => todo.id !== id)
    setTodos(newList);
  };

  // suprimer toutes les tâches faites
  const deleteAll = () => {
    const newList = todos.filter (todo => todo.checked !== true)
    setNbDone(0);
    setTodos(newList);
  }

  // Marquer tout les tâches comme faites
  
  const markAll = () => {
    const newtodos = todos.map(todo => {
      if(todo.checked == false){
        todo.checked = true;
        setNbDone(nbDone+nbToDo)
        setToDo(0)
      }
      else{
        todo.checked = false;
        setToDo(nbToDo+nbDone)
        setNbDone(0)
      }
      return todo
    })

    setTodos(newtodos)
  }

  // montrer seulement les taches pas faites

  const showActive = () => {
    setselected(true)
    setselected1(false)
    setselected2(false)
    const newTodos = todos.map(todo => {
      if(todo.checked === true){
        todo.isSelected = true
      }
      else{
        todo.isSelected = false
      }
      return todo
    });
    setTodos(newTodos)
  };

  // montrer toutes les taches 

  const showAll = () => {
    setselected(false)
    setselected1(true)
    setselected2(false)

    const newTodos = todos.map(todo => {
      todo.isSelected = false;
      return todo;
    })
    setTodos(newTodos)
  };

  // montrer les tâches faites 

  const showCompleted = () => {
    setselected(false)
    setselected1(false)
    setselected2(true)

    const newTodos = todos.map(todo => {
      if(todo.checked === false){
        todo.isSelected = true;
      }
      else{
        todo.isSelected = false;
      }
      return todo;
    }) 
    setTodos(newTodos);
  };

  // modifier le champ au double click

  const modifyList = (id) => {
    const newTodo = todos.map( todo => {
      if(todo.id === id){
        todo.isModify = true;
      }
      return todo
    })
    setTodos(newTodo)
  } 

  // enrengistrer les modifications

  const makeModif = (id,event) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        if(event.key === 'Enter' && event.target.value !== " " && event.target.value !== ""){
          console.log("click")
          console.log(event.key);
          console.log(todo.id)
          todo.taskName = event.target.value;
          todo.isModify = false;
        }
      }
      return todo
    })
    setTodos(newTodos)
  } 
  
  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={addList}/>
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all" onClick={markAll}>Mark all as complete</label>
          <TodoList todos={todos} onToggleDone={onToggleDone} removeTodo={removeTodo} modifyList={modifyList} makeModif={makeModif}/>
          <Info itemCompleted={nbDone} itemLeft={nbToDo} DeleteAll={deleteAll} showAll={showAll} showCompleted={showCompleted} showActive={showActive} selected={selected} selected1={selected1} selected2={selected2}/>
        </section>
		  </section>
    </div>
  );
}

export default App;
