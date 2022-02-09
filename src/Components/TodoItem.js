import React from 'react'
import './TodoItem.css';
import  Checkbox  from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/User/todoSlice'

function TodoItem({ name ,done ,id}) {

  const dispatch = useDispatch()

    const handleCheck = () =>{
      dispatch(setCheck(id))     
}
 
  return(
      <div className='todoItem'> 

      <Checkbox
      checked={done}
      onChange={handleCheck}
      inputProps={{ 'aria-label': 'controlled' }}
      />
      
      <p className={done ? 'todoItem-check' : 'todoItem--done'}>{name}</p>
      </div>
      
  );
}

export default TodoItem;
