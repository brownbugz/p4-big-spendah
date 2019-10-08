import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const ExpenseCard = (props) => {
    return (
        <div>
            <Card>
                <Link to={`/expense${props.id}`}>
                </Link>
            </Card>
        </div>
    )
}

export default ExpenseCard;