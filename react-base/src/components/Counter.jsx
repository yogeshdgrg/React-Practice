import { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncBtnClick = () => {
        setCount(() => count + 1)
    }

    const handleDecBtnClick = () => {
        setCount(() => count - 1)
    }

    return (
        <>
            <div className='body'>
                <span>{count}</span>
                <button className='button' onClick={handleIncBtnClick}>Increment</button>
                <button className='button' onClick={handleDecBtnClick}>Decrement</button>
            </div>
        </>
    )
}

export default Counter