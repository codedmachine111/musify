import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { createContext, useState } from "react";

export const PredictContext = createContext();
export const SongsContext = createContext();

function App() {
  const [predicted, setPredicted] = useState(false);
  const [songs, setSongs] = useState([]);

  return (
    <>
      <div className="App">
        <PredictContext.Provider value={{ predicted, setPredicted }}>
          <SongsContext.Provider value={{ songs, setSongs }}>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Router>
          </SongsContext.Provider>
        </PredictContext.Provider>
      </div>
    </>
  );
}

export default App;
