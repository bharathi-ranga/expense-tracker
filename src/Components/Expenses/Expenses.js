import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import CategoryFilter from "./CategoryFilter";

const Expenses = (props) => {
  // const expenses = props.items;
  let filteredExpenses = props.items;
  const [filteredYear, setFilteredYear] = useState("0");
  const [selectdCategory, setSelectdCategory] = useState("0");
  const [selectedMonth, setSelectedMonth] = useState("0");
  //const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const monthChangeHandler = (selectedMonth) => {
    setSelectedMonth(selectedMonth);
  };

  const categoryChangeHandle = (selectdCategory) => {
    setSelectdCategory(selectdCategory);
  };

  // filteredExpenses = props.items.filter((expense) => {
  //   return (
  //     expense.date.getFullYear().toString() === filteredYear &&
  //     expense.category === selectdCategory &&
  //     expense.date.toLocaleString("default", { month: "short" }) ===
  //       selectedMonth
  //   );
  // });

  if (
    filteredYear !== "0" &&
    selectedMonth === "0" &&
    selectdCategory === "0"
  ) {
    filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  } else if (
    filteredYear === "0" &&
    selectedMonth !== "0" &&
    selectdCategory === "0"
  ) {
    filteredExpenses = props.items.filter((expense) => {
      return (
        expense.date.toLocaleString("default", { month: "short" }) ===
        selectedMonth
      );
    });
  } else if (
    filteredYear !== "0" &&
    selectedMonth !== "0" &&
    selectdCategory === "0"
  ) {
    filteredExpenses = props.items.filter((expense) => {
      return (
        expense.date.getFullYear().toString() === filteredYear &&
        expense.date.toLocaleString("default", { month: "short" }) ===
          selectedMonth
      );
    });
  } else if (
    filteredYear !== "0" &&
    selectedMonth !== "0" &&
    selectdCategory !== "0"
  ) {
    filteredExpenses = props.items.filter((expense) => {
      return (
        expense.date.getFullYear().toString() === filteredYear &&
        expense.category === selectdCategory &&
        expense.date.toLocaleString("default", { month: "short" }) ===
          selectedMonth
      );
    });
  } else if (
    filteredYear === "0" &&
    selectedMonth === "0" &&
    selectdCategory !== "0"
  ) {
    switch (selectdCategory) {
      case "groceries":
        filteredExpenses = props.items.filter((expense) => {
          return expense.category === "groceries";
        });
        break;
      case "home-expenses":
        filteredExpenses = props.items.filter((expense) => {
          return expense.category === "home-expenses";
        });
        break;
      case "bills":
        filteredExpenses = props.items.filter((expense) => {
          return expense.category === "bills";
        });
        break;
      case "others":
        filteredExpenses = props.items.filter((expense) => {
          return expense.category === "others";
        });
        break;
      case "loans":
        filteredExpenses = props.items.filter((expense) => {
          return expense.category === "loans";
        });
        break;
      case "insurance":
        filteredExpenses = props.items.filter((expense) => {
          return expense.category === "insurance";
        });
        break;
      default:
        filteredExpenses = props.items;
        break;
    }
  } else if (
    filteredYear === "0" &&
    selectedMonth !== "0" &&
    selectdCategory !== "0"
  ) {
    switch (selectdCategory) {
      case "groceries":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "groceries" &&
            expense.date.toLocaleString("default", { month: "short" }) ===
              selectedMonth
          );
        });
        break;
      case "home-expenses":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "home-expenses" &&
            expense.date.toLocaleString("default", { month: "short" }) ===
              selectedMonth
          );
        });
        break;
      case "bills":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "bills" &&
            expense.date.toLocaleString("default", { month: "short" }) ===
              selectedMonth
          );
        });
        break;
      case "others":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "others" &&
            expense.date.toLocaleString("default", { month: "short" }) ===
              selectedMonth
          );
        });
        break;
      case "loans":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "loans" &&
            expense.date.toLocaleString("default", { month: "short" }) ===
              selectedMonth
          );
        });
        break;
      case "insurance":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "insurance" &&
            expense.date.toLocaleString("default", { month: "short" }) ===
              selectedMonth
          );
        });
        break;
      default:
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.date.toLocaleString("default", { month: "short" }) ===
            selectedMonth
          );
        });
        break;
    }
  } else if (
    filteredYear !== "0" &&
    selectedMonth === "0" &&
    selectdCategory !== "0"
  ) {
    switch (selectdCategory) {
      case "groceries":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "groceries" &&
            expense.date.getFullYear().toString() === filteredYear
          );
        });
        break;
      case "home-expenses":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "home-expenses" &&
            expense.date.getFullYear().toString() === filteredYear
          );
        });
        break;
      case "bills":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "bills" &&
            expense.date.getFullYear().toString() === filteredYear
          );
        });
        break;
      case "others":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "others" &&
            expense.date.getFullYear().toString() === filteredYear
          );
        });
        break;
      case "loans":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "loans" &&
            expense.date.getFullYear().toString() === filteredYear
          );
        });
        break;
      case "insurance":
        filteredExpenses = props.items.filter((expense) => {
          return (
            expense.category === "insurance" &&
            expense.date.getFullYear().toString() === filteredYear
          );
        });
        break;
      default:
        filteredExpenses = props.items;
        break;
    }
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          filteredMonth={selectedMonth}
          onChangeMonth={monthChangeHandler}
          onChangeFilter={filterChangeHandler}
        />
        <CategoryFilter
          currentCategory={selectdCategory}
          onSelectCategory={categoryChangeHandle}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        <div className="total_amount">
          Total amount : ${" "}
          {filteredExpenses.reduce((acc, cur) => acc + +cur.amount, 0)}
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
