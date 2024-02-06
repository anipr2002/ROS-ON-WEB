import { useState } from "react";
import Sidebar from "./components/editor/Sidebar";
import CodeEditorWindow from "./components/editor/CodeEditorWindow";
import { FileTree } from "./components/editor/file-tree";

const dummyDir = {
  id: "1",
  name: "loading...",
  type: "DUMMY",
  parentId: "0",
  depth: 0,
  dirs: [],
  files: [],
};

const App = () => {
  const [rootDir, setRootDir] = useState(dummyDir);
  const [selectedFile, setSelectedFile] = useState(undefined);

  const onSelect = (file) => setSelectedFile(file);

  return (
    <div>
      <main className="flex">
        <Sidebar>
          <FileTree
            rootDir={rootDir}
            selectedFile={selectedFile}
            onSelect={onSelect}
          />
        </Sidebar>
        <CodeEditorWindow selectedFile={selectedFile} />
      </main>
    </div>
  );
};

export default App;
