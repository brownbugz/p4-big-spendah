import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

class ExpenseContainer extends Component {
    render() {
        let expense = this.props.expense.map(exp => {
            return (
                <div>
                    <NavBar />
                </div>
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
            {expense}
        );
    }
}


export default ExpenseContainer;