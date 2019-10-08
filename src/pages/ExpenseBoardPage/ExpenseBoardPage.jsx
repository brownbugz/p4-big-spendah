import React from 'react';

const ExpenseBoardPage = (props) => {
    return (
        <div className="ExpenseBoardPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </div>
    );
};


export default ExpenseBoardPage;