import React from "react"
import { useForm } from "react-hook-form"

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitForm = (formData) => {
    console.log(formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor="name">Name: </label>
        <input
          {...register("name", {
            required: true,
            minLength: 3,
          })}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        {errors.name && errors.name.type === "required" ? (
          <p>Name is required</p>
        ) : null}
        {errors.name && errors.name.type === "minLength" ? (
          <p>Name should be atleast 3 char</p>
        ) : null}
        <label htmlFor="email">Email: </label>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        {errors.email && errors.email.type === "required" ? (
          <p>Email is required</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
