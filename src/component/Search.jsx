import { useContext, useState } from "react";
import "./Search.css";
import { data } from "../context/UserContext";
import { v4 as uuidv4 } from 'uuid';

function Search() {
  const[title,Settitle]=useState("");
 const [amount, Setamount] = useState("");
const [date, Setdate] = useState("");
const [type, Settype] = useState("Expense");
  const{ Setarray}=useContext(data);

  const handlesubmit=(e)=>{
    e.preventDefault();
    Setarray((a)=>[...a,{id:uuidv4(),title:title,amount:Number(amount),type:type,date:date}])
     Settitle("");
    Setamount(0);
    Setdate("");
    Settype("Expense");
  }
  return (
    <div className="search-nav">
      <h2>Add Transaction</h2>

      <div className="s1">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter title" value={title} onChange={(e)=>Settitle(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Enter amount" value={amount} onChange={(e)=>Setamount(e.target.value)} 
            min="1"
            required
          />

          <input
            type="date" value={date} onChange={(e)=>Setdate(e.target.value)}
            required
          />

          <select defaultValue="Expense" value={type} onChange={(e)=>Settype(e.target.value)}>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>

          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
