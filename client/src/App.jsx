import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/join";
import Chat from "./components/chat";

const App = () => {
  return (
    <Router>
      <Route path="/" co element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Router>
  );
};

export default App;
