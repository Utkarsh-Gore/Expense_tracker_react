import "./Statistics.css"
import { useContext } from "react";
import { data } from "../context/UserContext";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,  
  YAxis,
  CartesianGrid,
} from "recharts";

function Statistics() {
  const { array } = useContext(data);

  const income = array
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expense = array
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const balance = income - expense;

  const pieData = [
    { name: "Income", value: income },
    { name: "Expenses", value: expense },
  ].filter((item) => item.value > 0);

  const monthlyData = Object.values(
    array.reduce((acc, item) => {
      const month = item.date
        ? item.date.slice(0, 7)
        : "Unknown";

      if (!acc[month]) {
        acc[month] = {
          month,
          Income: 0,
          Expenses: 0,
        };
      }

      if (item.type === "Income") {
        acc[month].Income += Number(item.amount);
      } else if (item.type === "Expense") {
        acc[month].Expenses += Number(item.amount);
      }

      return acc;
    }, {})
  ).sort((a, b) => a.month.localeCompare(b.month));

  const COLORS = ["#16a34a", "#ef4444"];

  return (
    <div style={{ padding: "24px" }}>
      <h2>Financial Statistics</h2>

      {/* Summary cards */}
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Income</h3>
          <h2>₹ {income.toLocaleString("en-IN")}</h2>
        </div>

        <div className="stat-card">
          <h3>Total Expenses</h3>
          <h2>₹ {expense.toLocaleString("en-IN")}</h2>
        </div>

        <div className="stat-card">
          <h3>Wallet Balance</h3>
          <h2>₹ {balance.toLocaleString("en-IN")}</h2>
        </div>
      </div>

      {/* Income and expense doughnut chart */}
      <div className="chart-box">
        <h3>Income vs Expenses</h3>

        {pieData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={100}
                label
              >
                {pieData.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={
                      COLORS[
                        index
                      ]
                    }
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) =>
                  `₹ ${Number(value).toLocaleString("en-IN")}`
                }
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>Add transactions to view your chart.</p>
        )}
      </div>

      {/* Monthly bar chart */}
      <div className="chart-box">
        <h3>Monthly Income and Expenses</h3>

        {monthlyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="Income" fill="#16a34a" />
              <Bar dataKey="Expenses" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No transaction data available.</p>
        )}
      </div>
    </div>
  );
}

export default Statistics;
