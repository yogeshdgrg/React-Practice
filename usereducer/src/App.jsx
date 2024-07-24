import { useReducer } from "react"
import { reducer } from "./reducerProvider"
const App = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <h1>UseReducer Topic Example...</h1>
      Count: {state}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  )
}

export default App
