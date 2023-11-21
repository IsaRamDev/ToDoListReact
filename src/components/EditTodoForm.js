import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("")
  }
  return (
    <form className=' text-center p-5' onSubmit={handleSubmit}>
        <input type='text' className='selection:bg-pink-300 text-stone-800 py-2 px-4 rounded border-l-2 border-b-2 w-auto sm:w-48 text-xs sm:text-sm' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Update Task' />
        <button type='sumbit' className='bg-pink-300 hover:bg-pink-700 text-white font-bold py-2 px-0 sm:px-4 text-xs sm:text-sm rounded mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto'>
            Update task
        </button>
    </form>
  )
}
