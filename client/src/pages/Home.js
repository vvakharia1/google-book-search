import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Nav from "../components/NavBar";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount = () => {};

  loadBooks = () => {
    // find all the books in the API
    API.getbooks();
    console.log(API.getbooks());
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome to Google Book Search</h1>
              <h3>Add the books you'd like to read!</h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
