import { Link } from "react-router-dom";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <nav className="flex flex-row justify-around">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Router />
    </div>
  );
}

export default App;
