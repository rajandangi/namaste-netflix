import Header from "./Header"
import bgImage from "../assets/large-bg-image.jpg"
import { useState } from "react"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div
      className="bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <div className="grid place-items-center h-full">
        <div className="grid gap-8 bg-black px-12 pt-24 pb-36 rounded opacity-80 lg:w-1/4 mx-auto w-full">
          <header>
            <h1 className="text-3xl text-white font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          </header>
          <form action="" className="grid space-y-8">
            <input type="text"
              name="email" id="email"
              placeholder="Email Address"
              className="p-3 rounded  border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white" />
              
            {!isSignInForm && <input type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              className="p-3 rounded border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white" />
            }

            <input type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-3 rounded border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white" />

            <button className="px-4 py-2 bg-red-500 opacity-100 rounded cursor-pointer">Sign In</button>
          </form>
          <footer>
            <p className="text-gray-300">
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}
              <span className="text-white cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? " Sign Up now." : " Sign In now."}
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Login