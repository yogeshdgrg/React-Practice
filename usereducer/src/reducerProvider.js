import reducerType from "./reducerType"

const { increment, decrement } = reducerType
export const reducer = (state, action) => {
  switch (action.type) {
    case increment:
      return (state += 1)
    case decrement:
      return (state -= 1)
    default:
      console.log("Invalid choice...")
  }
}
