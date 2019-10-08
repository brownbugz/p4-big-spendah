import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


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