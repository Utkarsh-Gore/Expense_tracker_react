
import { useContext } from "react";
import "./All.css";
import { data } from "../context/UserContext";
function All() {
  const{array,Setarray}=useContext(data);
  const handledelete = (id) => {
  Setarray((a) => a.filter((aa) => aa.id !== id));
  };
  return (
    <div className="all-container">
      <h2>All Transactions</h2>

      <ol className="transaction-list">
        {array.map((item) => (
          <li key={item.id} className="transaction-item">
            <div className="transaction-info">
              <h3>{item.title}</h3>
              <p>{item.type}</p>

              <span className="transaction-date">
                <i className="fa-regular fa-calendar"></i>
                {" "}{item.date}
              </span>
            </div>

            <div className="transaction-right">
              <span
                className={
                  item.type === "Income"
                    ? "income-amount"
                    : "expense-amount"
                }
              >
                {item.type === "Income" ? "+" : "-"} ₹
                {item.amount.toLocaleString("en-IN")}
              </span>

              <button
                className="delete-btn"
                title="Delete transaction" onClick={()=>handledelete(item.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default All;
