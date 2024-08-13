/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import { Button, Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import sudhaImage from './sudha.jpeg'; // Importing the image
import murthyImage from './nrn.jpg'; // Importing the image
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <h1 style={{color:'white',backgroundColor:'skyblue'}}>INFOSYS</h1>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        <Navbar.Brand href="#contact">CONTACT</Navbar.Brand>
        <Navbar.Brand href="#news">NEWS</Navbar.Brand>
        <Navbar.Brand href="#products">PRODUCTS</Navbar.Brand>
      </Navbar>

      {/* Main Content */}
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={sudhaImage} /> {/* Using the imported image */}
              <Card.Body>
                <Card.Title>Sudha Murty</Card.Title>
                <Card.Text>
                Sudha Murty began her professional career in computer science and engineering. She is a member of the public health care initiatives of the Gates Foundation
                </Card.Text>
                <Button variant="primary">CHECK</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={murthyImage} /> {/* Using the imported image */}
              <Card.Body>
                <Card.Title>Narayana Murthy</Card.Title>
                <Card.Text>
                Narayana Murty began her professional career in computer science and engineering. She is a member of the public health care initiatives of the Gates Foundation
                </Card.Text>
                <Button variant="primary">CHECK</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h2>Success Rate in last 4 years</h2>
        <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
        </Row>
        </Container>
        <Container>
        <Row>
          <h2>Any Questions</h2>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Frequently Asked #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Frequently Asked #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </Row>
    </Container>

    <Container>
      <Row>
      <Button variant="primary" onClick={handleShow}>
        JOIN OUR COMMUNITY
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FORMS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Button variant="warning" onClick={handleShow}>
        LOGIN
      </Button>
      <Button variant="info" onClick={handleShow}>
        REGISTER
      </Button>
        </Offcanvas.Body>
      </Offcanvas>
      </Row>
    </Container>

    </div>
    
  );
}

export default App;
