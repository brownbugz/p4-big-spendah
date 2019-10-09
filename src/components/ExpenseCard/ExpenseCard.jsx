import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const ExpenseCard = (props) => {
    return (
        <div>
            <Card>
                {/* must link this card to the expense container */}
                <Link to={`/expense${props.id}`}>
                </Link>
            </Card>
        </div>
    )
}

export default ExpenseCard;