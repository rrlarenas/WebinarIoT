import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Graph from "./components/Graph";
import About from "./pages/About";
import { IrisProvider } from "./context/IrisDataContext";

function App() {
  return (
    <IrisProvider>
      <Router>
        <Header text="Arduino Meter" init="/temperatura" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/temperatura" />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/temperatura"
              element={<Graph metrica="temperatura" />}
            />
            <Route path="/humedad" element={<Graph metrica="humedad" />} />
          </Routes>
          <br />
          <hr />
          <br />
          <Footer />
        </div>
      </Router>
    </IrisProvider>
  );
}

export default App;
