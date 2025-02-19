import Header from "./Header"
import bgImage from "../assets/large-bg-image.jpg"
import { useRef, useState } from "react"
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    // Validate the from data
    const errors = validateData(
      {
        email: email.current.value,
        password: password.current.value,
        fullname: !isSignInForm ? fullname.current.value : null
      },
      isSignInForm
    );
    setErrorMsg(errors);
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
          <form onSubmit={(e) => e.preventDefault()} className="grid space-y-8">
            <div className="grid gap-1">
              <input
                ref={email}
                type="text"
                name="email" id="email"
                placeholder="Email Address"
                className="p-3 rounded  border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white" />
              {errorMsg.email && <span className="text-red-500">{errorMsg.email}</span>}
            </div>

            {!isSignInForm && (
              <div className="grid gap-1">
                <input
                  ref={fullname}
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full Name"
                  className="p-3 rounded border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white" />
                {errorMsg.fullname && <span className="text-red-500">{errorMsg.fullname}</span>}
              </div>
            )}

            <div className="grid gap-1">
              <input
                ref={password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="p-3 rounded border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white" />
              {errorMsg.password && <span className="text-red-500">{errorMsg.password}</span>}
            </div>

            <button className="px-4 py-2 bg-red-500 opacity-100 rounded cursor-pointer" onClick={handleButtonClick}>Sign In</button>
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