import React from 'react';

const ExpenseCard = (props) => {
    return (
        <div>
            <ul>
                <li>Item: <input type="String"></input></li>
                <li>Price: <input type="Number"></input></li>
            </ul>
        </div>
    )
}

export default ExpenseCard;