
// import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout"
import Images from './components/Images'
import All from './components/All'
import Videos from './components/Videos'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/images' element={<Images />} />
        <Route path='/all' element={<All />} />
        <Route path='/videos' element={<Videos />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
