import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import NotMatch from "./notMatch.jsx";
import SearchHome from "./searchHome";

export default function Search() {
  return(
    <div>
      <h1>Searching page</h1>

      <Routes>
        <Route path="/" element={<SearchHome />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}