import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Nav from "../components/NavBar";

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
              <h1>Add books to read</h1>
            </Jumbotron>
            <Col size="md-6">
              <form>
                <Input name="title" placeholder="Title (required)" />
                <Input name="author" placeholder="Author (required)" />
                <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                <FormBtn>Submit</FormBtn>
              </form>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
