export const validateData = (
  { email, password, fullname },
  isSignInForm = false
) => {
  const errors = {};

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
    errors.password =
      "Password must be at least 8 characters long and contain at least one letter, one number, and one special character";
  }
  
  if (!isSignInForm) {
    if (!fullname) {
      errors.fullname = "Full name is required";
    } else if (fullname.length < 3) {
      errors.fullname = "Full name must be at least 3 characters long";
    }
  }

  return errors;
};
