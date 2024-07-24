import React, { useEffect, useState } from "react"
import axios from "axios"

export default function TodoList() {
    const [todo, setTodos] = useState('')
    const [todoList, setTodoList] = useState([])
    const [update, setUpdate] = useState(false)
    const [id, setId] = useState('')
    const [updateValue, setUpdateValue] = useState('')


    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post("http://localhost:8000/addTodos", { todo })
        console.log("done...")
    }

    const handleUpdateValue = async (event) => {
        event.preventDefault()
        await axios.patch(`http://localhost:8000/updateTodo/${id}`, { updateValue })
        console.log("data updated...")
        setUpdate(!update)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/deleteTodo/${id}`)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then((res) => { setTodoList(res.data) })
            .catch((err) => { console.log(err) })
    }, [todoList])

    return (
        <>
            <div>TodoList</div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodos(e.target.value)} />
                <button>add new</button>
            </form>
            <ul>

                {todoList.map((el, index) => {
                    return <div key={index}>
                        <li>
                            {el.todo}
                            <button onClick={() => { setUpdate(!update), setId(el._id) }}>Edit</button>
                            <button onClick={() => handleDelete(el._id)}>Delete</button>
                            <hr />
                        </li>
                    </div>
                })}
                {/* For updating the value I have created this input field */}
                {
                    update && (
                        <div>
                            <p>Enter the todo list You want to update:</p>
                            <form onSubmit={(event) => handleUpdateValue(event)}>
                                <input type="text" onChange={(event) => setUpdateValue(event.target.value)} />
                                <button>Update</button>
                            </form>
                        </div>
                    )
                }

            </ul>
        </>
    )
}