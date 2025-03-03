import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/redux/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useNavigate } from "react-router";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser({}));
        navigate("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unSubscribe();
  }, [dispatch, navigate]);
};


export default useAuth;