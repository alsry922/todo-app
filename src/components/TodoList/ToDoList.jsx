import React, {useState} from 'react'
import AddTodo from "./AddTodo";
import Todo from "../Todo/Todo";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        {id: '123', text: '장보기', status: 'active',},
        {id: '124', text: '공부하기', status: 'active'}
    ]);

    const handleAdd = (todo) => {
        setTodos((prev) => {
            return [...prev, todo]
        });
    }
    const handleUpdate = (todo) => {
        setTodos(prev => )
    }
    return <section>
        <ul>
            {
                todos.map(todo => <Todo key={todo.id} text={todo.text}></Todo>)
            }
        </ul>
        <AddTodo onAdd={handleAdd}></AddTodo>
    </section>;
}
