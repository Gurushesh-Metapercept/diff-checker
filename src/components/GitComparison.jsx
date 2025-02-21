import { useEffect, useState } from "react";
import axios from "axios";
import { Diff, Hunk, parseDiff } from "react-diff-view";
import "react-diff-view/style/index.css";

const fetchRepoTree = async (owner, repo, branch, token) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
    const response = await axios.get(url, { headers });

    console.log(response.data);
    return response.data.tree;
  } catch (error) {
    console.error(`Error fetching ${branch} branch tree:`, error);
    return [];
  }
};

const fetchFileContent = async (owner, repo, filename, branch, token) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filename}?ref=${branch}`;
    const response = await axios.get(url, { headers });
    return atob(response.data.content);
  } catch (error) {
    console.log("👉 [GitComparison.jsx:27]: error: ", error);
    return null;
  }
};

// eslint-disable-next-line react/prop-types
const FileDiff = ({ filename, baseContent, headContent }) => {
  const diffText = `diff --git a/${filename} b/${filename}\n${baseContent}`;
  const hunks = parseDiff(diffText, { unified: true })[0]?.hunks || [];

  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #ddd",
        padding: "10px",
      }}
    >
      {/* Base Branch Column */}
      <div style={{ width: "50%", padding: "10px", background: "#ffeded" }}>
        <h4>Base: {filename}</h4>
        <pre style={{ overflowX: "auto", background: "#fff", padding: "10px" }}>
          <code>{baseContent || "Missing."}</code>
        </pre>
      </div>

      {/* Head Branch Column */}
      <div style={{ width: "50%", padding: "10px", background: "#e8ffe8" }}>
        <h4>Head: {filename}</h4>
        <pre style={{ overflowX: "auto", background: "#fff", padding: "10px" }}>
          <code>{headContent || "New file added."}</code>
        </pre>
      </div>
    </div>
  );
};

const GitComparison = ({ owner, repo, baseBranch, headBranch, token }) => {
  const [baseFiles, setBaseFiles] = useState([]);
  const [headFiles, setHeadFiles] = useState([]);
  const [fileContents, setFileContents] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [baseTree, headTree] = await Promise.all([
        fetchRepoTree(owner, repo, baseBranch, token),
        fetchRepoTree(owner, repo, headBranch, token),
      ]);

      const baseFileSet = new Set(baseTree.map((item) => item.path));
      const headFileSet = new Set(headTree.map((item) => item.path));
      const allFiles = new Set([...baseFileSet, ...headFileSet]);

      const filePromises = [...allFiles].map(async (filename) => {
        const [baseContent, headContent] = await Promise.all([
          baseFileSet.has(filename)
            ? fetchFileContent(owner, repo, filename, baseBranch, token)
            : null,
          headFileSet.has(filename)
            ? fetchFileContent(owner, repo, filename, headBranch, token)
            : null,
        ]);
        return { filename, baseContent, headContent };
      });

      const contents = await Promise.all(filePromises);
      const contentMap = contents.reduce((acc, file) => {
        acc[file.filename] = file;
        return acc;
      }, {});

      setBaseFiles(baseTree);
      setHeadFiles(headTree);
      setFileContents(contentMap);
      setLoading(false);
    };

    fetchData();
  }, [owner, repo, baseBranch, headBranch]);

  if (loading) return <p>Loading repository structure...</p>;

  return (
    <div>
      <h2>
        Comparing {baseBranch} ↔ {headBranch}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          background: "#f5f5f5",
        }}
      >
        <h3 style={{ width: "50%", textAlign: "center" }}>
          {baseBranch} (Base)
        </h3>
        <h3 style={{ width: "50%", textAlign: "center" }}>
          {headBranch} (Head)
        </h3>
      </div>

      <div>
        {Object.keys(fileContents).map((filename) => (
          <FileDiff
            key={filename}
            filename={filename}
            baseContent={fileContents[filename]?.baseContent}
            headContent={fileContents[filename]?.headContent}
          />
        ))}
      </div>
    </div>
  );
};

export default GitComparison;
