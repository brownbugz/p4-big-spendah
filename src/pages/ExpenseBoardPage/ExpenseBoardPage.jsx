import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

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

            </footer>
        </div>
    );
};


export default ExpenseBoardPage;