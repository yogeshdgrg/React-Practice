import { useState } from "react"

const Item = () => {
    const [fruits, setFruits] = useState([])

    const handleFromSubmit = (event) => {
        event.preventDefault()
        const fruitName = event.target.fruit.value
        const quantity = event.target.quantity.value
        setFruits([...fruits, { fruitName, quantity, isChecked: false }])
    }

    const handleDeleteTodo = (index) => {
        let fruitList = [...fruits]
        fruitList.splice(index, 1)
        setFruits(fruitList)
    }

    const handleCheckTodos = (index) => {
        let fruitList = [...fruits]
        const fruit = fruitList[index]
        fruit.isChecked = !fruit.isChecked
        setFruits(fruitList)
    }

    return (
        <>
            <form action="" onSubmit={handleFromSubmit} >
                <input type="text" name="fruit" />
                <input type="number" name="quantity" />
                <button>Add to List</button>
            </form>
            <hr />


            <p>Todos List</p>
            {
                fruits.map((fruit, index) => {
                    return <p key={index} > <input type="checkbox" onClick={() => handleCheckTodos(index)} /> {fruit.fruitName} {fruit.quantity} <button onClick={() => handleDeleteTodo(index)}>Delete</button> </p>
                })
            }
            <hr />
            <p>Completed Todos List</p>

            {
                fruits.map((fruit, index) => {
                    return fruit.isChecked && <li key={index}>{fruit.fruitName}</li>
                })
            }


        </>
    )
}

export default Item