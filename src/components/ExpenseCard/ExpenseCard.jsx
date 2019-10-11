import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


function ExpenseCard({expense, handleDelete}) { 
    return (
        <div>
            <Card className="card">
                <label>Category: {expense.category}</label>
                <label>Name of Item: {expense.name}</label>
                <label>Cost: ${expense.cost}</label>
                <button
                    onClick={() => handleDelete(expense._id)}
                    className="btn btn-xs btn-danger"
                >
                    Delete
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: '/edit',
                        state: {expense}
                    }}
                >
                    Edit
                </Link>
            </Card>
        </div>
    );
}

export default ExpenseCard;