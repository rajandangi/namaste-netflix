import { createBrowserRouter, RouterProvider } from "react-router"
import Browse from "./Browse"
import Login from "./Login"

const Body = () => {
  // Create a router 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body