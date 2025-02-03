// File: FileExplorer.js
import React, { useState } from "react";

// Icon components
const FolderIcon = () => <span>📁</span>;
const FileIcon = () => <span>📄</span>;
const MissingIcon = () => <span>❌</span>;

const FileExplorer = () => {
  const [folder1Files, setFolder1Files] = useState([]);
  const [folder2Files, setFolder2Files] = useState([]);
  const [folder1Path, setFolder1Path] = useState("");
  const [folder2Path, setFolder2Path] = useState("");
  const [comparisonResult, setComparisonResult] = useState(null);

  const handleFileChange = (event, folderNumber) => {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const path = fileList[0].webkitRelativePath.split("/")[0];
      const fileArray = Array.from(fileList).map((file) => ({
        name: file.name,
        path: file.webkitRelativePath,
        size: file.size,
        lastModified: new Date(file.lastModified),
      }));

      if (folderNumber === 1) {
        setFolder1Path(path);
        setFolder1Files(fileArray);
      } else {
        setFolder2Path(path);
        setFolder2Files(fileArray);
      }
    }
  };

  const compareFolders = () => {
    const allFiles = [...folder1Files, ...folder2Files];
    const uniqueFiles = Array.from(new Set(allFiles.map((f) => f.name))).sort();

    const result = uniqueFiles.map((name) => {
      const file1 = folder1Files.find((f) => f.name === name) || {};
      const file2 = folder2Files.find((f) => f.name === name) || {};
      return { file1, file2 };
    });

    setComparisonResult(result);
  };

  return (
    <div>
      <div>
        <input
          type="file"
          webkitdirectory="true"
          onChange={(e) => handleFileChange(e, 1)}
        />
        {folder1Path && <h3>Selected Folder 1: {folder1Path}</h3>}
      </div>
      <div>
        <input
          type="file"
          webkitdirectory="true"
          onChange={(e) => handleFileChange(e, 2)}
        />
        {folder2Path && <h3>Selected Folder 2: {folder2Path}</h3>}
      </div>
      <button
        onClick={compareFolders}
        disabled={!folder1Files.length || !folder2Files.length}
      >
        Compare
      </button>
      {comparisonResult && (
        <table>
          <thead>
            <tr>
              <th>File/Folder Name</th>
              <th>Size (Folder 1)</th>
              <th>Last Modified (Folder 1)</th>
              <th></th>
              <th>Size (Folder 2)</th>
              <th>Last Modified (Folder 2)</th>
            </tr>
          </thead>
          <tbody>
            {comparisonResult.map(({ file1, file2 }, index) => (
              <tr key={index}>
                <td>{file1.name || file2.name}</td>
                <td>{file1.size || "-"}</td>
                <td>
                  {file1.lastModified ? file1.lastModified.toDateString() : "-"}
                </td>
                <td>{(!file1.name || !file2.name) && <MissingIcon />}</td>
                <td>{file2.size || "-"}</td>
                <td>
                  {file2.lastModified ? file2.lastModified.toDateString() : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileExplorer;
