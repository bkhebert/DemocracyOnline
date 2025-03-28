import React from "react";
import { Routes, Route } from "react-router";

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import PoliticalPhilosophy from "./views/PoliticalPhilosophy";
import Debates from "./views/Debates";

function App() {
  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-extrabold text-neutral-dark">
          <span className="text-red-primary">Democracy</span>
          <span className="text-blue-primary">Online</span>
        </h1>
        <p className="text-gray-secondary mt-2 text-lg italic">
          Instant facts for every opinion
        </p>
      </div>
      <div className="w-full h-2 bg-gradient-to-r from-red-primary via-neutral-400 to-blue-primary mb-8" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="politicalPhilosophy" element={<PoliticalPhilosophy />} />
        <Route path="/Debates/*" element={<Debates></Debates>} />
      </Routes>
    </>
  );
}

export default App;
