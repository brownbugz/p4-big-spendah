import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseCard.css';


const ExpenseCard = (props) => {

    return (
        <div>
            <Card>
                {props.category}
                {props.name}
                {props.cost}
                {props.id}
                <button 
                    onClick={this.props.handleDelete.bind(null)} 
                    className="btn btn-danger btn-sm">
                        Delete
                </button>
            </Card>
        </div>
    );
}

export default ExpenseCard;