import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


function ExpenseCard({items, handleDelete}) { 
    return (
        <div>
            <Card className="card">
                <label>Category: {items.category}</label>
                <label>Name of Item: {items.name}</label>
                <label>Cost: ${items.cost}</label>
                <button
                    onClick={() => handleDelete(items._id)}
                    className="btn btn-xs btn-danger"
                >
                    Delete
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: '/edit',
                        state: {items}
                    }}
                >
                    Edit
                </Link>
            </Card>
        </div>
    );
}

export default ExpenseCard;