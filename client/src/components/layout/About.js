import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Navbar,Nav,Button, Container,Col,Modal} from 'react-bootstrap';

import './About.css'
class Post extends Component {
  render() {
    return (
      <div  style={{backgroundColor:'white'}}>
         <Navbar collapseOnSelect expand="lg"   style={{backgroundColor:'white'}} >
        <Navbar.Brand href="/" className="Navbar-Brand"> <div style={{
         
           fontSize:35
        }} >Back</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Container>
         <Col></Col>
         <Col>
</Col>
</Container>
       
      </Navbar>
      <Container>

        <Carousel >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assessments/abdo.png")}
              alt="First slide"

            />
            <Carousel.Caption>
              <h3>Abdelrahman Khaled</h3>
              <p>programer la3eeb w 3la wad3o.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assessments/hashem.png")}
              alt="second slide"

            />

            <Carousel.Caption>
              <h3>Ahmed hashem</h3>
              <p>wa7ed keda kan me3ady 5alenah scram master.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assessments/badr.png")}
              alt="Third slide"

            />

            <Carousel.Caption>
              <h3 style={{color:'black'}}>Abdelrahman Badr</h3>
              <p style={{color:'black'}}>
                el prince beta3na ya3ny el gad3ana kolha.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assessments/mayar.png")}
              alt="Forth slide"

            />

            <Carousel.Caption>
              <h3 > Mayar Lotfy</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>

        <div className="About">
        <div className="Arial-Black">
          <h style={{ position: "absolute", left: "40%" }}> our identity </h>
        </div>
        <br />
        <br />
        <br />
        <div className="semi-Bold">
          <p style={{ position: "absolute" }}> Butterfly Effect </p>
        </div>
        <br />
        <br />
        <br />
        <div className="regular">
          <p style={{ position: "absolute" }}>
            {" "}
            Order is brought upon forthrightly from disorder. A small action can
            <br />
            lead to a massive outcome. The humble flip of a fragile butterfly at
            <br />
            one end of the Origami
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="semi-Bold">
          <p style={{ position: "absolute" }}> Origami </p>
          <br />
          <br/>
          <div className="regular">
            <p style={{ position: "absolute" }}>
              {" "}
              Origami is the art of paper folding into endless possible shapes
              and structures. 
              <br />
          <br />
              The use of Origami Emphasis the concept of small
              action that cause a change.<br /> As a single fold can change the
              behavior of the entire sheet of paper.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Post;
