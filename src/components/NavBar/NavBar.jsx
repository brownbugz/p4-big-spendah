import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link>Expense List</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link>Logout</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>Welcome</span>
        </div>
        :
        <div>
            <Link>Log In</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link>Sign Up</Link>
        </div>;

    return (
        <div className="NavBar">
            {nav}
        </div>
    );
};

export default NavBar;