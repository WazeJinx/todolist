import React, {useState} from 'react'

export const Todoform = () => {
    const {setValue} = useState("")

  return (
    <form className='Todoform'>
        <input type='text' className='todo-input' placeholder='What is the task today' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
        </form>
  )
}
