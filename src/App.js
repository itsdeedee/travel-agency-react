import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
}

export default App;
