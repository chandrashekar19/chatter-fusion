import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Chat } from "./components/chat";
import { Join } from "./components/join";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Join />} />{" "}
        {/* "/" is now `index`  in latest version of react-router-dom */}
        <Route path="chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
