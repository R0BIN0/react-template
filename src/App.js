import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
