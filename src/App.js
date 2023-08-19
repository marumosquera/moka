import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { PitchEsp } from "./views/PitchEsp";
import { PitchEng } from "./views/PitchEng";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pitchEN" element={<PitchEsp />} />
          <Route path="/pitchES" element={<PitchEng />} />
        </Routes>
        
    </div>
  </BrowserRouter>
  );
}

export default App;
