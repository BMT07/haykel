import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap"
import logo from "../../assets/logo.png"
import { FcPanorama, FcPhotoReel, FcPrivacy, FcUnlock} from "react-icons/fc";


const  Navigation= ()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <LinkContainer to='/'> 
        <Navbar.Brand >
            <img src={logo} alt= "logo" style={{width: 50, higth: 50}}/> 
            <span> <strong> LostThings App </strong> </span>
        </Navbar.Brand>
        </LinkContainer> 

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
          <LinkContainer to ="/signin" > 
            <Nav.Link ><FcUnlock /> <span> Login </span> </Nav.Link>  
            </LinkContainer>

            <LinkContainer to ="/signup"> 
            <Nav.Link ><FcPrivacy /> <span> Register </span></Nav.Link>  
            </LinkContainer>

            <LinkContainer to ="/announcelist"> 
            <Nav.Link ><FcPhotoReel /> <span> Announcements </span></Nav.Link>  
            </LinkContainer>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;