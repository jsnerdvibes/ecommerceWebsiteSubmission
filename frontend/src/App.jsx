import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Dashboard from "./Components/Dashboard/Dashboard"
import Home from "./Components/Home/Home"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import AddProduct from "./Components/DashBoardProduct/AddProduct"
import EditItem from "./Components/DashBoardProduct/EditItem"
import DeleteItem from "./Components/DashBoardProduct/DeleteItem"


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
        element:<Home />
        },
        {
          path:"/Dashboard",
        element:<Dashboard />
        },
        {
          path:"/Home",
        element:<Home />
        },
        {
          path:"/SignUp",
        element:<SignUp />
        },
        {
          path:"/Login",
        element:<Login />
        },
        {
          path:"/AddProduct",
        element:<AddProduct />
        },
        {
          path:"/editItem",
        element:<EditItem />
        },
        {
          path:"/deleteItem",
        element:<DeleteItem />
        }

      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
