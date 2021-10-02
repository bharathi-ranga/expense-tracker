import React from "react";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        {props.isLoggedIn && (
          <li>
            <span onClick={props.onclickExpense}>ToDo</span>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <span onClick={props.onclickExpense}>Expenses</span>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onclickLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
