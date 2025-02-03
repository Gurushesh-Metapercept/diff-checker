// File: App.js
import React from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer";

function App() {
  return (
    <div className="App">
      <h1>Folder Viewer</h1>
      <div className="file-explorer-container">
        <FileExplorer />
      </div>
    </div>
  );
}

export default App;
