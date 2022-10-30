import LeftContainer from "./components/LeftContainer/LeftContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./components/HomePage/home";
import Dashboard from "./components/Dashboard/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="leftconatiner">
          <LeftContainer />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
