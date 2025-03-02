import LoginInput from "@/components/UI/LoginInput";
import { IMAGES } from "@/utils/constants";
import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/slices/userSlice";
import Header from "@/components/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMsg({});
  };

  const handleButtonClick = () => {
    // Validate the from data
    const formData = {
      email: email.current.value,
      password: password.current.value,
      fullname: !isSignInForm ? fullname.current.value : null,
    };

    const validatonErrors = validateData(formData, isSignInForm);
    setErrorMsg(validatonErrors);

    // If errors exist, return early
    if (Object.keys(validatonErrors).length > 0) return;

    // If no errors, Proceed with the Login or Signup
    if (isSignInForm) {
      // proceed with login
      signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg({ firebaseError: errorMessage });
        });
    } else {
      // proceed with signup
      createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // Set the display name
          updateProfile(user, {
            displayName: fullname.current.value,
          })
            .then(() => {
              console.log("Profile updated successfully");
              dispatch(addUser({ uid: user.uid, email: user.email, displayName: fullname.current.value }));
            }).catch((error) => {
              setErrorMsg({ firebaseError: error.message });
            })
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg({ firebaseError: errorMessage });
        });
    }
  };

  return (
    <div
      className="bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${IMAGES.BACKGROUND})` }}
    >
      <Header />
      <div className="grid place-items-center h-full">
        <div className="grid gap-8 bg-black px-12 pt-24 pb-36 rounded opacity-80 lg:w-1/4 mx-auto w-3/4">
          <header>
            <h1 className="text-3xl text-white font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          </header>
          <form onSubmit={(e) => e.preventDefault()} className="grid space-y-8">
            <LoginInput type="email" placeholder="Email Address" reference={email} error={errorMsg.email} />

            {!isSignInForm && (
              <LoginInput type="text" placeholder="Full Name" reference={fullname} error={errorMsg.fullname} />
            )}

            <LoginInput type="password" placeholder="Password" reference={password} error={errorMsg.password} />

            <div className="grid gap-1">
              <button
                className="px-4 py-2 bg-red-500 opacity-100 rounded cursor-pointer"
                onClick={handleButtonClick}
              >
                Sign In
              </button>

              {errorMsg.firebaseError && (
                <span className="text-red-500">{errorMsg.firebaseError}</span>
              )}
            </div>

          </form>
          <footer>
            <p className="text-gray-300">
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? " Sign Up now." : " Sign In now."}
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
