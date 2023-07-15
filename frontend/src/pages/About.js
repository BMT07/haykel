import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FcApproval, FcGlobe } from "react-icons/fc";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import "./About.css";

function About () {
    return (
        <div className="divion-row"> 
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <h1>ALL FOR ONE <FcGlobe/> ONE FOR ALL </h1>
                    <p> Let's find our Missing things </p>
                        <Link to ="/signin"><Button variant="success">
                            Get Started <FcApproval/>
                        </Button></Link> 
                   
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
           
        </Row>
        </div>
    );
}

export default About;