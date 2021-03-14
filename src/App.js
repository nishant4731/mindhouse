import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import yogaImg from "../src/image/yoga.jpg";
import Meditation from "../src/image/meditation.jpg";
import Nutrition from "../src/image/nutrition.jpg";
import Therapy from "../src/image/therapy.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={12} lg={4}>
          <div className="banner-wrap mb-md-5">
          <h1 className="main-heading">Explanation of what MH does across these 4 verticals</h1>
          <strong className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong>
          </div>
          </Col>
          <Col className="mb-xs-5 mb-md-0" md={6} lg={{span: 3, offset: 1}}>
          <Card>
            <Card.Img src={yogaImg} alt="yoga Img"/>
            <Card.ImgOverlay>
              <div className="card-wrapper">
              <Row>
              <Col lg={5}><Card.Title >Yoga</Card.Title></Col>
              <Col lg={7}><Button className="button-style">Know more</Button></Col>
              </Row>
              </div>
            </Card.ImgOverlay>
          </Card>
          </Col>
          <Col md={6} lg={4}>
          <Row className="mb-3">
            <Col className="mb-xs-5 mb-md-0">
            <Card>
            <Card.Img src={Meditation} alt="meditaion image"/>
            <Card.ImgOverlay>
              <div className="card-wrapper">
              <Card.Title>Meditation</Card.Title>
              <Button className="button-style">Know more</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
            </Col>
          </Row>
          <Row>
          <Col className="mb-xs-5 mb-md-0">
            <Card>
            <Card.Img src={Nutrition} alt="nutrition image"/>
            <Card.ImgOverlay>
              <div className="card-wrapper">
              <Card.Title>Nutrition</Card.Title>
              <Button className="button-style">Know more</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img src={Therapy} alt="therapy image"/>
            <Card.ImgOverlay>
              <div className="card-wrapper">
              <Card.Title>Therapy</Card.Title>
              <Button className="button-style">Know more</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
