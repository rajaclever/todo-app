import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';
import { useSelector} from 'react-redux'
import { selectTodoList } from './features/User/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className='app__container'>
       <div className='app__todoContainer'>
      {
        todoList.map(item =>(
          <TodoItem 
           name={item.item}
           done={item.done}
           key={item.id}
          />
        ))
      }
      
       </div>
       <Input />
      </div>
    </div>
  );
}

export default App;
