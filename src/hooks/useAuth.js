import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/redux/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser({}));
      }
    });

    // Cleanup subscription on unmount
    return () => unSubscribe();
  }, []);
};


export default useAuth;