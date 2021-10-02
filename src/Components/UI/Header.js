import Navigation from "./Navigation";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="main-header">
      <h1 onClick={props.onClickHome}>Expense Tracker</h1>
      <Navigation
        isLoggedIn={props.isLoggedIn}
        onclickExpense={props.onClickExpense}
        onclickLogout={props.onLogout}
      />
    </header>
  );
};
export default Header;
