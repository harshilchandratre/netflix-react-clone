import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/ui/Home/Home";
import Header from "./components/ui/Header/Header";
import TVseries from "./components/ui/TVSeries/tvseries";
import Popular from "./components/ui/Popular/Popular";
import Films from "./components/ui/Films/Films";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/shared/LoadingScreen/LoadingScreen";

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
            <Route path="/tvseries" element={<TVseries />} />
            <Route path="/films" element={<Films />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
