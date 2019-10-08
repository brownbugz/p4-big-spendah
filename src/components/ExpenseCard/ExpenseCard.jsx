import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseCard = (props) => {
    return (
        <div>
            <Link to={`/expense${props.id}`}>
            </Link>
        </div>
    )
}

export default ExpenseCard;