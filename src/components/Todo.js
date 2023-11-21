import React from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className=' py-2 px-5 justify-center flex'>
      <div className='bg-pink-200 rounded-lg p-2 flex items-center space-x-1 w-full sm:w-80'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? ' text-gray-500  line-through' : 'text-gray-950'} self-center p-1 w-80 truncate`}>{task.task}</p>
        <div className='flex'>
            <FontAwesomeIcon icon={faPenToSquare} className=' p-1 m-1 ml-5 text-[#0625B5]' onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} className=' p-1 m-1 text-[#DB0000]' onClick={() => deleteTodo(task.id)} />
        </div>
        </div>
    </div>
  )
}
