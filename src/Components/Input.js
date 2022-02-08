import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux'
import  saveTodo  from '../features/todoSlice';

function Input() {

const[input , setInput] = useState('')
const dispatch = useDispatch();

const handleChange = () =>{
  
  dispatch(saveTodo({
    item:input,
    done:false,
    id:Date.now()
  }));


}
  
  return(
    <div className='input'>
    <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
    <button onClick={handleChange}>ADD TODO</button>
    </div>

  )
   
}

export default Input;
