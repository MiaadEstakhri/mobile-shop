import { Route, Routes } from "react-router-dom";
import "./App.css";
import SortMobile from "./components/Filter/SortMobile";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-gray-100 ">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
        <SortMobile/>
    </div>
  );
}

export default App;
