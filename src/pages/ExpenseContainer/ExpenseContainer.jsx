import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';
import Col from 'react-bootstrap/Col';

class ExpenseContainer extends Component {
    render() {
        let expense = this.props.expense.map(exp => {
            return (
                <div>
                    <ExpenseCard
                        key={exp.id}
                        id={exp.id}
                        name={exp.name}
                        description={exp.description}
                        price={exp.price}
                    />
                </div>
            )
        });

        return (
            <Col>
                {expense}
            </Col>
        );
    }
}


export default ExpenseContainer;