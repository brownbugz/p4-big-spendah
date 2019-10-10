import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';


class ExpenseContainer extends Component {
  
  render() {
    let expenseCards = this.props.items.map((expense, idx) => {
      return (
        <ExpenseCard 
          name={expense.name}
          category={expense.category}
          cost={expense.cost}
        />
      )
    })

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Container>
            <Row>
              <label>Category: <input type="text" name="category" onChange={this.props.handleChange} /></label>
            </Row>
            <Row>
              <label>Name of Item: <input type="text" name="name" onChange={this.props.handleChange} /></label>
            </Row>
            <Row>
              <label>Cost of Item: $<input type="number" name="cost" onChange={this.props.handleChange} /></label>
            </Row>
            <Row>
              <button>Submit</button>
            </Row>
          </Container>
        </form>

        this.state.items.length ?
          {expenseCards}
        :
        "Loading..."

      </div>
    );
  }
  
}

export default ExpenseContainer;