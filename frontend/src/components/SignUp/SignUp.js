
import {Link, useNavigate } from "react-router-dom"
import "./SignUp.css"
import { useDispatch, useSelector} from "react-redux";

import {signupUser} from "../../Redux/actions/userActions"
import { useState } from "react";
import swal from 'sweetalert';
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  //const [image, setImage] = useState("")
  // const [fullName, setFullName] = useState("")
  // const [password, setPassword] = useState("")
  // const [passwordConfirmation, setPasswordConfirmation] = useState("")
  // const [gender, setGender] = useState("")  
  // const [email, setEmail] = useState("")
  // const [address, setAddress] = useState("")  
  // const [phone, setPhone] = useState("")
  
//   function validateImg(e) {
//     const file = e.target.files[0];
//     if (file.size >= 1048576) {
//         return alert("Max file size is 1mb");
//     } else {
//         setImagePreview(image);
//     }
// }



const handleSubmit =(event)=>{
  event.preventDefault();
  //if (!image) return alert("Please upload your profile picture");
  const data = new FormData(event.currentTarget);
  // //data.append("file", image)
  // data.append("fullName", fullName)
  // data.append("password", password)
  // data.append("passwordConfirmation", passwordConfirmation)
  // data.append("gender", gender)
  // data.append("email", email)
  // data.append("address", address)
  // data.append("phone",phone)


  dispatch(signupUser({
    fullName: data.get("fullName"),
    email: data.get("email"),
    password: data.get("password"),
    gender: data.get("gender"),
    address: data.get("address"),
    passwordConfirmation: data.get("passwordConfirmation"),
    phone: data.get("phone"),}, navigate))}

    // fullName: data.get("fullName"),
    // gender: data.get("gender"),
    // email: data.get("email"),
    // password: data.get("password"),
    // passwordConfirmation: data.get("passwordConfirmation"),

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
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
          <input type="text" placeholder="Enter your name" required name="fullName" />
        </div>
        <div className="input-box">
          <span className="details">Address</span>
          <input type="text" placeholder="Enter your username" required name="address"  />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" placeholder="Enter your email" required name="email"  />
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="Enter your number" required name="phone" />
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type={passwordShown ? "text" : "password"}  placeholder="Enter your password" required name="password" />
          <i className="fa-solid fa-eye-slash eyes" onClick={togglePassword}></i>
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type={passwordShown ? "text" : "password"}  placeholder="Confirm your password" required name="passwordConfirmation"  />
          <i className="fa-solid fa-eye-slash slash" onClick={togglePassword}></i>
        </div>
      </div>
      <div className="gender-details">
        <input type="radio" name="gender" id="dot-1"  value="male"/>
        <input type="radio" name="gender" id="dot-2" value="female" />
        <input type="radio" name="gender" id="dot-3" value="Prefer not to say"/>
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