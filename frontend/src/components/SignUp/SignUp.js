import { Link, useNavigate } from "react-router-dom"
import "./SignUp.css"
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useDispatch } from "react-redux";
import { signupUser } from "../../Redux/actions/userActions"
import { useState } from "react";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [phone, setPhone] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const errors = {};
    if (!data.get("fullName")) errors.fullName = "Full Name is required";
    if (!data.get("address")) errors.address = "Address is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.get("email")) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.get("email"))) {
      errors.email = "Invalid email format";
    }
    if (!isValidPhoneNumber(phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!data.get("phone")) errors.phone = "Phone Number is required";
    const password = data.get("password");
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 5) {
      errors.password = "Password must be at least 5 characters long";
    } else if (!/\d/.test(password)) {
      errors.password = "Password must contain at least one digit";
    }
    const passwordConfirmation = data.get("passwordConfirmation");
    if (!passwordConfirmation) {
      errors.passwordConfirmation = "Confirm Password is required";
    } else if (password !== passwordConfirmation) {
      errors.passwordConfirmation = "Passwords do not match";
    }
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(
        signupUser(
          {
            fullName: data.get("fullName"),
            email: data.get("email"),
            password: data.get("password"),
            gender: data.get("gender"),
            address: data.get("address"),
            passwordConfirmation: data.get("passwordConfirmation"),
            phone: data.get("phone"),

          }, navigate)
      );
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="form">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit} >
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                name="fullName"
              />
              {validationErrors.fullName && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {validationErrors.fullName}
                </div>
              )}
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" placeholder="Enter your username" name="address" />
              {validationErrors.address && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {validationErrors.address}
                </div>
              )}
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" name="email" />
              {validationErrors.email && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {validationErrors.email}
                </div>
              )}
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <PhoneInput
                name="phone"
                placeholder="Enter your number"
                value={phone}
                onChange={setPhone}
                defaultCountry="TN"
              />
              {validationErrors.phone && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {validationErrors.phone}
                </div>
              )}
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type={passwordShown ? "text" : "password"} placeholder="Enter your password" name="password" />
              {validationErrors.password && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {validationErrors.password}
                </div>
              )}
              <i className="fa-solid fa-eye-slash eyes" onClick={togglePassword}></i>
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type={passwordShown ? "text" : "password"} placeholder="Confirm your password" name="passwordConfirmation" />
              {validationErrors.passwordConfirmation && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {validationErrors.passwordConfirmation}
                </div>
              )}
              <i className="fa-solid fa-eye-slash slash" onClick={togglePassword}></i>
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" value="male" />
            <input type="radio" name="gender" id="dot-2" value="female" />
            <input type="radio" name="gender" id="dot-3" value="Prefer not to say" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one" />
                <span className="gender">male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two" />
                <span className="gender">female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three" />
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" defaultValue="Register" />
          </div>
          <div>
            <p className="text-center"> Don't have an account ? <Link to="/signin">SignIn</Link> </p>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SignUp
