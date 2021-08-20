import s from './App.module.css'
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handleToggle = (id) => {
      setTodos([
        ...todos.map((todo) =>
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
        )
      ])
  }

  return (
    <div className={s.app}>
        <header>
            <h2> Количество дел: {todos.length} </h2>
        </header>
        <TodoAdd addTask={addTask}/>
        {todos.map((todo) => {
            return (
          <TodoItem 
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
          )
        })} 
    </div>
  );
}

export default App;
