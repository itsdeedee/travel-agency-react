import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </div>
  );
}

export default App;
