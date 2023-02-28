import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Queries from "./pages/Queries";

const App = () => {
  return (
    <div>
      <div className="bg-blue-500 py-4 flex justify-center">
        <div className="flex justify-between items-center gap-5 ">
          <a
            href="/"
            className="text-lg text-slate-200 hover:text-slate-50 hover:font-semibold hover:underline hover:underline-offset-1 transition-all ease-out duration-300"
          >
            Main Page
          </a>
          <a
            href="/queries"
            className="text-lg text-slate-200 hover:text-slate-50 hover:font-semibold hover:underline hover:underline-offset-1 transition-all ease-out duration-300"
          >
            Queries
          </a>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/queries" element={<Queries />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
