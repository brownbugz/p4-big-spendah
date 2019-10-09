import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class ExpenseContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return (
      <form onSubmit={props.onSubmit}>
        <Container>
          <Row>
            <label>Category: <input type="text" name="category" /></label>
          </Row>
          <Row>
            <label>Name of Item: <input type="text" name="name" /></label>
          </Row>
          <Row>
            <label>Cost of Item: $<input type="number" /></label>
          </Row>
          <Row>
            <button>Submit</button>
          </Row>
        </Container>
      </form>
    );
  }
   
}

export default ExpenseContainer;