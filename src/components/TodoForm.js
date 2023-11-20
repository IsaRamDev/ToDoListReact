import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);

    setValue("")
  }
  return (
    <form className=' text-center p-5' onSubmit={handleSubmit}>
        <input type='text' className=' w-52 selection:bg-pink-300 text-stone-800 py-2 px-4 rounded border-l-2 border-b-2' value={value} onChange={(e) =>      setValue(e.target.value)} placeholder='What is the task today?' />
        <button type='submit' className=' bg-pink-300 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded '>
            Add task
        </button>
    </form>
  )
}
