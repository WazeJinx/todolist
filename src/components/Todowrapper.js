import React from 'react'
import { Todoform } from './Todoform'
import { TodoEdit } from './TodoEdit'

export const Todowrapper = () => {
  return (
    <div className='TodoWrapper'>
    <Todoform />
    <TodoEdit />
    </div>
  )
}
