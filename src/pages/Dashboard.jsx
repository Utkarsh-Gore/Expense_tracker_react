
import { useContext } from "react";
import All from "../component/All";
import Search from "../component/Search";
import "./Dashboard.css";
import { data } from "../context/UserContext";

function Dashboard() {
  const{array}=useContext(data);
 const income = array
  .filter((item) => item.type === "Income")
  .reduce((total, item) => total + Number(item.amount), 0);

const expense = array
  .filter((item) => item.type === "Expense")
  .reduce((total, item) => total + Number(item.amount), 0);

const final= income - expense;

  return (
    <>
    <div className="track-container">

      {/* Total Income */}
      <div className="div121">
        <div className="d1">
          <i className="fa-solid fa-arrow-up-long"></i>
        </div>

        <div className="d2">
          <div className="d12">Total Income</div>
          <div className="d13">₹ {income}</div>
        </div>
      </div>

      {/* Total Expenses */}
      <div className="div122">
        <div className="d1 d-expense">
          <i className="fa-solid fa-arrow-down-long"></i>
        </div>

        <div className="d2">
          <div className="d12">Total Expenses</div>
          <div className="d13 expense-amount">₹ {expense}</div>
        </div>
      </div>

      {/* Balance */}
      <div className="div123">
        <div className="d1 d-balance">
          <i className="fa-solid fa-wallet"></i>
        </div>

        <div className="d2">
          <div className="d12">Total Balance</div>
          <div className="d13 balance-amount">₹ {final}</div>
        </div>
      </div>
    </div>


    <Search/>
    <All/>
    </>
  );
}

export default Dashboard;
