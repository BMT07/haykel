import React, { useState } from 'react'
import './contact.css'
import { FcSms } from "react-icons/fc";
import axios from "axios"
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);


   const handleName=(e)=>{
    setName(e.target.value)
   }   

   const handleEmail=(e)=>{
    setEmail(e.target.value)
   }   

   const handleMessage=(e)=>{
    setMessage(e.target.value)
   }   

const formSumbit =(e)=>{
  e.preventDefault();
  let data= {
    name, email, message
  }

  axios.post("http://localhost:5000/api/forma",data)
  .then(res=>{
    setEmailSent(true)
  },resetform()).catch(()=>{
    console.log("message not sent");
  })
}


const resetform=()=>{
setName('')
setEmail('')
setMessage('')


setTimeout(()=>{
setEmailSent(true)
}, 1000)

setTimeout(()=>{
  setEmailSent(false)
  }, 3000)
}


    return (

      <div> 

<div className="continer">
  <h2 className="title">
  <span><FcSms/> </span>
    <span className="title-word title-word-2">CONTACT</span>
    <span className="title-word title-word-3">US</span>
    <span style={{marginLeft:"20px"}}><FcSms/> </span>
  </h2>
</div>


 <div id="contact-form">

<form onSubmit={formSumbit}> 
            <input type="text" placeholder="Your Name"  name="name" value={name} onChange= {handleName}/>
            <input type="email" placeholder="Your email address" name="email"  value={email} onChange= {handleEmail}/>
            <textarea placeholder="Your message" name="message" value={message} onChange= {handleMessage}></textarea>
            <div className={emailSent? 'sent' : "unsend"}>
              <h5> Email send successfully</h5> 
              </div> 
              <div style={{display: "flex", gap: "2rem"}}> 
            <button type='submit'>Send Message</button>
            <Link to="/announcelist"><button>Back</button></Link>
            </div>
            </form>
        </div>
       
      </div>
    );
};

export default Contact;