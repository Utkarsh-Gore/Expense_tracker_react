    import "./Nav.css";
    function Nav() {
    const date = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
    return (
        <div className="nav-container">
        <div className="box1">
            <div className="img1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGacJuvPzoXjylcw_COlEgYLBhCgeoomFGDEUwZ8-h6Q&s=10" alt="" />
            </div>
            <div className="bx1">
                <div className="b1"><b>Expense Tracker</b></div>
                <div className="b2">Track Your Money,Build Better Habbit</div>
            </div>
        </div>
        <div className="box2"><i class="fa-regular fa-calendar-days"></i>&nbsp;&nbsp;&nbsp;{date}</div>
        </div>
    )
    }

    export default Nav