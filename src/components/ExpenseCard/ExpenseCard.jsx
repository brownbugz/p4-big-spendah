import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


const ExpenseCard = (props) => {

    return (
        <div>
            <Card className="card">
                        <label>Category: {props.category}</label>
                        <label>Name of Item: {props.name}</label>
                        <label>Cost: ${props.cost}</label>
                        <button
                            onClick={props.handleDelete}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                            onClick={props.handleUpdate}
                            className="btn btn-danger btn-sm"
                        >
                            Edit
                        </button>
            </Card>
        </div>
    );
}

export default ExpenseCard;