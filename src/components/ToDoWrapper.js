import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
        console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
}
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id ))
}
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
}
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
}
  return (
    <div className='bg-pink-50 rounded-xl sm:p-10 w-8/12 mx-auto mt-10 pt-5'>
        <h1 className=" text-center font-bold sm:text-3xl xsm:text-lg text-md sm:p-10 p-0 text-teal-900 ">Daily To Do List</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} key={index}/>
            ):(
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo} />
            )
        ))}
    </div>
  )
}
