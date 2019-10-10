import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


const ExpenseCard = (props) => {

    return (
        <div>
            <Card>
                {props.name}
            </Card>
        </div>
    );
}

export default ExpenseCard;