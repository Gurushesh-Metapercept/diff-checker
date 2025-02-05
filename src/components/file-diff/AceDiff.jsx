import { useState, useRef, useEffect } from "react";
import AceEditor from "react-ace";
import AceDiff from "ace-diff";
import "brace/mode/javascript";
import "brace/theme/monokai";
import "ace-diff/dist/ace-diff.min.css";

const AceDifferentiator = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [showCompareButton, setShowCompareButton] = useState(false);
  const [showDiffEditor, setShowDiffEditor] = useState(false);
  const aceDiffRef = useRef(null);

  useEffect(() => {
    if (aceDiffRef.current) {
      aceDiffRef.current.destroy();
    }

    if (showDiffEditor) {
      aceDiffRef.current = new AceDiff({
        element: "#acediff__wrap",
        theme: "monokai",
        left: {
          content: code1,
          editable: true,
        },
        right: {
          content: code2,
          editable: true,
        },
        showDiffs: true,
        showConnectors: true,
        classes: {
          diff: "acediff__diffLine",
          connector: "acediff__connector",
          newCodeConnectorLinkContent: "&#8594;",
          deletedCodeConnectorLinkContent: "&#8592;",
        },
      });
    }
  }, [showDiffEditor, code1, code2]);

  const handleFileUpload = (event, setterFunction) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setterFunction(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleCompare = () => {
    setShowDiffEditor(true);
  };

  useEffect(() => {
    if (code1 && code2) {
      setShowCompareButton(true);
    }
  }, [code1, code2]);

  return (
    <div>
      {showDiffEditor && (
        <div
          className="shadow-sm border rounded"
          id="acediff__wrap"
          style={{
            width: "100%",
          }}
        ></div>
      )}

      <div
        className="d-flex flex-column flex-md-row"
        style={{
          marginTop: showDiffEditor ? "3rem" : "0",
        }}
      >
        <input
          className="form-control"
          type="file"
          onChange={(e) => handleFileUpload(e, setCode1)}
        />

        <input
          className="form-control ms-0 ms-md-3 "
          type="file"
          onChange={(e) => handleFileUpload(e, setCode2)}
        />
      </div>

      {showCompareButton && (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark mt-4"
            onClick={handleCompare}
            style={{ marginTop: "10px" }}
          >
            Compare
          </button>
        </div>
      )}

      <div className="mt-4 d-flex justify-content-between flex-column flex-md-row gap-3 file_viewer">
        <AceEditor
          mode="html"
          theme="xcode"
          name="editor1"
          value={code1}
          fontSize={14}
          lineHeight={24}
          onChange={setCode1}
          showPrintMargin={false}
          width="100%"
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          style={{
            border: "1px solid #e3e5e8",
            borderRadius: "0.375rem",
            marginBottom: showDiffEditor ? "20px" : "0",
            display: showDiffEditor ? "block" : "inline-block",
          }}
        />
        <AceEditor
          mode="html"
          theme="xcode"
          name="editor1"
          value={code2}
          fontSize={14}
          lineHeight={24}
          onChange={setCode2}
          highlightActiveLine={false}
          showPrintMargin={false}
          width="100%"
          editorProps={{ $blockScrolling: true }}
          style={{
            border: "1px solid #e3e5e8",
            borderRadius: "0.375rem",
            marginBottom: showDiffEditor ? "20px" : "0",
            display: showDiffEditor ? "block" : "inline-block",
          }}
        />
      </div>
    </div>
  );
};

export default AceDifferentiator;
