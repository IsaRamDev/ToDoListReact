import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("")
  }
  return (
    <form className=' p-5 justify-center flex' onSubmit={handleSubmit}>
        <input type='text' className='w-52 selection:bg-pink-300 text-stone-800 py-2 px-4 rounded border-l-2 border-b-2' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Update Task' />
        <button type='submit' className=' bg-pink-300 hover:bg-pink-700 text-white font-bold py-2 px-2 rounded'>
            Update task
        </button>
    </form>
  )
}
