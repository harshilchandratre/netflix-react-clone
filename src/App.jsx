import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/ui/Home/Home";
import Header from "./components/ui/Header/Header";

function App() {
  return (
    <>
      <div style={{padding: "0 20px", backgroundColor: "#000"}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
