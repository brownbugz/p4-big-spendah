import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


const ExpenseCard = (props) => { 
    return (
        <div>
            <Card className="card">
                <label>Category: {props.category} </label>
                <label>Name of Item: {props.name} </label>
                <label>Cost: ${props.cost} </label>
                <button
                    onClick={props.handleDelete}
                    className="btn btn-xs btn-danger"
                >
                    Delete
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: '/edit',
                        state: []
                    }}
                >
                    Edit
                </Link>
            </Card>
        </div>
    );
}

export default ExpenseCard;