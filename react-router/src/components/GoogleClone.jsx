import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./Home"
import Videos from "./Videos"
import All from "./All"
import Images from "./Images"
import Error from "./Error"
import Layout from "./Layout"

function GoogleClone() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/*" element={<Error />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}>
        <Layout/>
      </RouterProvider>
    </>
  )
}

export default GoogleClone
