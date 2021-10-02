import React, { useEffect, useState } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import LoginPage from "./Components/Login/LoginPage";
import Header from "./Components/UI/Header";
import Home from "./Components/UI/Home";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 19),
    category: "home-expenses",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 1),
    category: "home-expenses",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 12, 8),
    category: "insurance",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 4, 21),
    category: "home-expenses",
  },
  {
    id: "e5",
    title: "sugar",
    amount: 799.49,
    date: new Date(2021, 11, 30),
    category: "groceries",
  },
  {
    id: "e6",
    title: "dry-fruits",
    amount: 799.49,
    date: new Date(2021, 7, 22),
    category: "groceries",
  },
  {
    id: "e7",
    title: "dry-fruits",
    amount: 500,
    date: new Date(2020, 1, 7),
    category: "groceries",
  },
  {
    id: "e8",
    title: "books",
    amount: 300,
    date: new Date(2020, 9, 1),
    category: "other",
  },
  {
    id: "e9",
    title: "dry-fruits",
    amount: 90,
    date: new Date(2020, 5, 12),
    category: "groceries",
  },
  {
    id: "e10",
    title: "table",
    amount: 899,
    date: new Date(2020, 7, 26),
    category: "home-expenses",
  },
  {
    id: "e11",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 12, 28),
    category: "insurance",
  },
  {
    id: "e12",
    title: "current bill",
    amount: 450,
    date: new Date(2020, 4, 12),
    category: "bills",
  },
  {
    id: "e13",
    title: "water bill",
    amount: 79,
    date: new Date(2020, 11, 9),
    category: "bills",
  },
  {
    id: "e14",
    title: "current bill",
    amount: 245.9,
    date: new Date(2019, 7, 12),
    category: "bills",
  },
  {
    id: "e15",
    title: "home loan",
    amount: 5000,
    date: new Date(2020, 1, 12),
    category: "loans",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isLoggedin, setisLoggedIn] = useState(false);
  const [expenseDisplay, setExpenseDisplay] = useState(false);
  const [homeDisplay, setHomeDisplay] = useState(true);

  useEffect(() => {
    const storedInfo = localStorage.getItem("islogged");
    if (storedInfo === "1") {
      setisLoggedIn(true);
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("islogged", "1");
    setisLoggedIn(true);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const openExpense = () => {
    setExpenseDisplay(true);
    setHomeDisplay(false);
  };

  const displayHomeHandle = () => {
    setHomeDisplay(true);
    setExpenseDisplay(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("islogged");
    setisLoggedIn(false);
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <Header
        isLoggedIn={isLoggedin}
        onClickExpense={openExpense}
        onClickHome={displayHomeHandle}
        onLogout={logoutHandler}
      />
      {!isLoggedin && <LoginPage onLogin={loginHandler} />}
      {isLoggedin && homeDisplay && <Home />}
      {isLoggedin && expenseDisplay && (
        <NewExpense onAddExpense={addExpenseHandler} />
      )}
      {isLoggedin && expenseDisplay && <Expenses items={expenses} />}
    </div>
  );
};

export default App;
