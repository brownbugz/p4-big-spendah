import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

class ExpenseContainer extends Component {
    render() {
        let expense = this.props.expense.map(exp => {
            return (
                <ExpenseCard
                    key={exp.id}
                    id={exp.id}
                    name={exp.name}
                    description={exp.description}
                />
            )
        });
    }
}


export default ExpenseContainer;