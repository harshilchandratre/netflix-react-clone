import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/ui/Home/index.jsx";
import Header from "./components/ui/Header/Header";
import Popular from "./components/ui/Popular/index.jsx";
import Films from "./components/ui/Films/index.jsx";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/shared/LoadingScreen/LoadingScreen";
import TVSeries from "./components/ui/TVSeries/index.jsx";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mainReload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    mainReload();
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <>
      <div style={{ padding: "0 20px", backgroundColor: "#000" }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tvseries" element={<TVSeries />} />
            <Route path="/films" element={<Films />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
