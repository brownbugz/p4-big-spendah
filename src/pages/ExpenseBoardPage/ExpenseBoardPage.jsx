import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

const ExpenseBoardPage = (props) => {
    return (
        <div className="ExpenseBoardPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <div>
                <ExpenseCard
                />
                <Link>Expense List</Link>
                <Link>New Expense Card</Link>
            </div>
            <footer>
                &copy; Sonnia J. Kemmer || 2019
            </footer>
        </div>
    );
};


export default ExpenseBoardPage;