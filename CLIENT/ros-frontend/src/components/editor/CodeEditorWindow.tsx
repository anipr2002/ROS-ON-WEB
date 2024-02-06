import Editor from "@monaco-editor/react";
import { File } from "../../utils/file-manager";

const CodeEditorWindow = ({
  selectedFile,
}: {
  selectedFile: File | undefined;
}) => {
  if (!selectedFile) return null;

  const code = selectedFile.content;
  let language = selectedFile.name.split(".").pop();

  if (language === "js" || language === "jsx") language = "javascript";
  else if (language === "ts" || language === "tsx") language = "typescript";

  return (
    <div
      className=" m-0 font-[16px] "
      style={{
        width: "calc(100% - 250px)",
      }}
    >
      <Editor height="100vh" language={language} value={code} theme="" />
    </div>
  );
};

export default CodeEditorWindow;
