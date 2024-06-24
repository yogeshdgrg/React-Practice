import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Layout from "./components/Layout"

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  )
}

export default App
