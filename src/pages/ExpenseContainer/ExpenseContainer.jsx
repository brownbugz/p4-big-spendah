import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

class ExpenseContainer extends Component {
    render() {
        let expense = this.props.expense.map(exp => {
            return (
                <>
                    <NavBar />
                    <ExpenseCard
                        key={exp.id}
                        id={exp.id}
                        name={exp.name}
                        description={exp.description}
                        price={exp.price}
                    />
                </>
            )
        });

        return (
            {expense}
        );
    }
}


export default ExpenseContainer;