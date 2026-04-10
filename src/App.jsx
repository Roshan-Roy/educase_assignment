import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Home from "./pages/home/Home"
import Signin from "./pages/signin/Signin"
import Signup from "./pages/signup/Signup"
import Profile from "./pages/profile/Profile"
import Wrapper from "./components/Wrapper/Wrapper"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "signup",
      element: <Signup />
    },
    {
      path: "signin",
      element: <Signin />
    },
    {
      path: "profile",
      element: <Profile />
    }
  ])
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App