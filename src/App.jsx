import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./components/Browse";
import Login from "./components/Login";
import useAuth from "@/hooks/useAuth";

function App() {
  
  useAuth();

  // Create a router
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
