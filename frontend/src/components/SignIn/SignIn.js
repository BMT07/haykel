
import {Link, useNavigate }from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./SignIn.css"
import { signinUser } from '../../Redux/actions/userActions';


const SignIn = () =>{

const currentUser = useSelector(state=>state.userReducer.currentUser)


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    
    dispatch(
      signinUser(
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        navigate
      )
    );
  };
  return (

    <div className='whole'>   
<div className="boxForm">
  <div className="wrapper">
    <div className="title"><span>Login Form</span></div>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <i className="fas fa-user" />
        <input type="email" placeholder="Email or Phone" required name="email"/>
      </div>
      <div className="row">
        <i className="fas fa-lock" />
        <input type="password" placeholder="Password" required name="password"/>
      </div>
      <div className="pass">Forgot password?</div>
      <div className="row button">
        <input type="submit" defaultValue="Login"/>
      </div>
      <div className="signup-link">Not a member? <Link to="/signup"> Signup now </Link></div>
    </form>
  </div>
</div>

<div > 
  <img  className="image" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000" alt=""/> </div>
</div> 


  );
}

export default SignIn;