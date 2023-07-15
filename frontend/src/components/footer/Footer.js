import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>

<footer>
  <div className="content">
    <div className="left boxit">
      <div className="upper">
        <div className="topic">About us</div>
        <p>LostThings App Is The Free Database And Information Center For Lost And Found Things</p>
      </div>
      <div className="lower">
        <div className="topic">Contact us</div>
        <div className="phone">
          <a href="#"><i className="fas fa-phone-volume" />+216 53 473 475 </a>
        </div>
        <div className="email">
          <a href="#"><i className="fas fa-envelope" />haykel.mhadhbi@esprit.tn</a>
        </div>
      </div>
    </div>
    <div className="middle boxit">
      <div className="topic">Our Services</div>
      <div><a href="#">Missing announcements </a></div>
      <div><a href="#">Finding announcements</a></div>
      <div><a href="#"> Regiter/Login </a></div>
      <div><a href="#"> Comment and like posts</a></div>
      <div><a href="#">Contact others </a></div>
    </div>
    <div className="right boxit">
      <div className="topic">Subscribe us</div>
      <form action="#">
        <input type="text" placeholder="Enter email address" />
        <input type="submit" defaultValue="Send" />
        <div className="media-icons">
          <a href="https://www.facebook.com/youssef.dhaou.10" target="_blank"><i className="fab fa-facebook-f" /></a>
          <a href="https://www.instagram.com/dhaou.youssef/?hl=fr" target="_blank"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
          <a href="https://www.linkedin.com/in/youssef-dhaou-808293160/" target="_blank"><i className="fab fa-linkedin-in" /></a>
        </div>
      </form>
    </div>
  </div>
  <div className="bottom">
    <p>Copyright © 2022 <a href="#">lostThings APP</a> All rights reserved</p>
  </div>
</footer>

    </div>
  )
}

export default Footer