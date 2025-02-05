import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 className="mb-4">Welcome to Diff Checker</h2>
      <button
        className="btn btn-dark me-3"
        onClick={() => navigate("/folder-diff")}
      >
        📁 Folder Diff
      </button>
      <button className="btn btn-dark" onClick={() => navigate("/file-diff")}>
        📄 File Diff
      </button>
    </div>
  );
};

export default Home;
