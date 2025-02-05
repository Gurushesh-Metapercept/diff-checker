import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FolderDiff from "./components/folder-diff/FolderDiff";
import FileDiffHome from "./components/file-diff/FileDiffHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder-diff" element={<FolderDiff />} />
          <Route path="/file-diff" element={<FileDiffHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
