import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FolderDiff from "./components/folder-diff/FolderDiff";
import FileDiffHome from "./components/file-diff/FileDiffHome";
import FolderTreeComparison from "./components/FileDiffAPI/FileDiffAPI";
import GithubAPI from "./components/GithubAPI";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder-diff" element={<FolderTreeComparison />} />
          <Route path="/file-diff" element={<FileDiffHome />} />
          <Route path="/demo" element={<GithubAPI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
