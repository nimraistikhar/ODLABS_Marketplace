import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";

import Footer from "./components/footer";
import Mint from "./components/mint";
import Reward from "./components/reward";
import Tryme from "./components/tryme";
import Home from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/tryme" element={<Tryme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
