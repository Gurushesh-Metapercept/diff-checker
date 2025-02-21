import { useState } from "react";

// 📁 Folder & File Icons
const FolderIcon = ({ isOpen }) => (
  <span style={{ fontSize: "20px", cursor: "pointer" }}>
    {isOpen ? "📂" : "📁"}
  </span>
);
const FileIcon = () => <span style={{ fontSize: "20px" }}>📄</span>;
const MissingIcon = () => <span style={{ color: "red" }}>❌</span>;

// 📂 Build Tree Structure
const buildTree = (files) => {
  const tree = {};
  files.forEach(({ fullPath }) => {
    const parts = fullPath.split("/");
    let current = tree;
    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = index === parts.length - 1 ? { isFile: true } : {};
      }
      current = current[part];
    });
  });
  return tree;
};

// 🔍 Merge & Identify Missing Elements
const mergeTrees = (tree1, tree2) => {
  const result = {};
  const traverse = (node1, node2, parent) => {
    const allKeys = new Set([...Object.keys(node1), ...Object.keys(node2)]);
    allKeys.forEach((key) => {
      if (!node1[key]) {
        parent[key] = { ...node2[key], missing: "left" };
      } else if (!node2[key]) {
        parent[key] = { ...node1[key], missing: "right" };
      } else {
        parent[key] = { ...node1[key] };
        if (!node1[key].isFile && !node2[key].isFile) {
          traverse(node1[key], node2[key], parent[key]);
        }
      }
    });
  };
  traverse(tree1, tree2, result);
  return result;
};

// 📂 Tree Component with Expand/Collapse
const TreeView = ({ tree1, tree2, level = 0, path = "" }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (folder) => {
    const fullPath = path ? `${path}/${folder}` : folder;
    setExpanded((prev) => ({ ...prev, [fullPath]: !prev[fullPath] }));
  };

  const allKeys = new Set([...Object.keys(tree1), ...Object.keys(tree2)]);

  return (
    <ul
      style={{
        paddingLeft: level * 20,
        listStyleType: "none",
        margin: 0,
      }}
    >
      {Array.from(allKeys).map((key) => {
        const currentPath = path ? `${path}/${key}` : key;
        const isFolder1 = tree1[key] && !tree1[key].isFile;
        const isFolder2 = tree2[key] && !tree2[key].isFile;
        const isMissingLeft = !tree1[key];
        const isMissingRight = !tree2[key];

        return (
          <li key={currentPath} style={{ marginBottom: "4px" }}>
            <div style={{ display: "flex" }}>
              {/* Left Side */}
              <div style={{ flex: 1 }}>
                {isMissingLeft ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MissingIcon /> (Missing)
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {isFolder1 ? (
                      <>
                        <span
                          onClick={() => toggleExpand(key)}
                          style={{ cursor: "pointer", marginRight: 8 }}
                        >
                          <FolderIcon isOpen={expanded[currentPath]} />
                        </span>
                        <span>{key}</span>
                      </>
                    ) : (
                      <>
                        <FileIcon /> {key}
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Right Side */}
              <div style={{ flex: 1 }}>
                {isMissingRight ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MissingIcon /> (Missing)
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {isFolder2 ? (
                      <>
                        <span
                          onClick={() => toggleExpand(key)}
                          style={{ cursor: "pointer", marginRight: 8 }}
                        >
                          <FolderIcon isOpen={expanded[currentPath]} />
                        </span>
                        <span>{key}</span>
                      </>
                    ) : (
                      <>
                        <FileIcon /> {key}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {expanded[currentPath] && (isFolder1 || isFolder2) && (
              <TreeView
                tree1={isFolder1 ? tree1[key] : {}}
                tree2={isFolder2 ? tree2[key] : {}}
                level={level + 1}
                path={currentPath}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

// 🗂️ File Explorer Component
const FileExplorer = () => {
  const [folder1Files, setFolder1Files] = useState([]);
  const [folder2Files, setFolder2Files] = useState([]);
  const [folder1Path, setFolder1Path] = useState("");
  const [folder2Path, setFolder2Path] = useState("");

  const handleFileChange = (event, folderNumber) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const basePath = files[0].webkitRelativePath.split("/")[0];
      const fileData = files.map((file) => ({
        fullPath: file.webkitRelativePath.replace(`${basePath}/`, ""),
      }));

      folderNumber === 1
        ? (setFolder1Path(basePath), setFolder1Files(fileData))
        : (setFolder2Path(basePath), setFolder2Files(fileData));
    }
  };

  const tree1 = buildTree(folder1Files);
  const tree2 = buildTree(folder2Files);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: 20,
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Compare Two Folders</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          type="file"
          directory=""
          webkitdirectory=""
          onChange={(e) => handleFileChange(e, 1)}
          style={{ marginRight: 10 }}
        />
        <input
          type="file"
          directory=""
          webkitdirectory=""
          onChange={(e) => handleFileChange(e, 2)}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{folder1Path || "Folder 1"}</h3>
        <h3>{folder2Path || "Folder 2"}</h3>
      </div>

      {(folder1Files.length > 0 || folder2Files.length > 0) && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            backgroundColor: "white",
          }}
        >
          <TreeView tree1={tree1} tree2={tree2} />
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
