import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { createContext, useState } from "react";

export const PredictContext = createContext();
export const SongContext = createContext();

function App() {
  const [predicted, setPredicted] = useState(false);
  const [song, setSong] = useState({});

  return (
    <>
      <div className="App">
        <PredictContext.Provider value={{ predicted, setPredicted }}>
          <SongContext.Provider value={{ song, setSong }}>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Router>
          </SongContext.Provider>
        </PredictContext.Provider>
      </div>
    </>
  );
}

export default App;
