import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


const ExpenseCard = (props) => {

    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <label>Category: {props.category}</label>
                    <br />
                    <label>Name of Item: {props.name}</label>
                    <br />
                    <label>Cost: ${props.cost}</label>
                    <br />
                    <button
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ExpenseCard;