import { useState } from "react";
import Sidebar from "./components/editor/Sidebar";
import CodeEditorWindow from "./components/editor/CodeEditorWindow";
import { FileTree } from "./components/editor/file-tree";

const emptyDir: Directory = {
  id: "0",
  name: "root",
  type: "DIRECTORY",
  parentId: undefined,
  depth: 0,
  dirs: [
    {
      id: "1",
      name: "src",
      type: "DIRECTORY",
      parentId: "0",
      depth: 1,
      dirs: [
        {
          id: "2",
          name: "components",
          type: "DIRECTORY",
          parentId: "1",
          depth: 2,
          dirs: [],
          files: [
            {
              id: "3",
              name: "App.tsx",
              type: "FILE",
              parentId: "2",
              depth: 3,
              content: "// Your App component code here...",
            },
          ],
        },
      ],
      files: [
        {
          id: "4",
          name: "index.tsx",
          type: "FILE",
          parentId: "1",
          depth: 2,
          content: "// Your index file code here...",
        },
      ],
    },
  ],
  files: [],
};
const App = () => {
  const [rootDir, setRootDir] = useState(emptyDir);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(
    emptyDir.files[0]
  );

  const onSelect = (file: File) => setSelectedFile(file);

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
        <CodeEditorWindow
          selectedFile={
            selectedFile || {
              id: "",
              name: "",
              type: "",
              parentId: "",
              depth: 0,
              content: "",
            }
          }
        />
      </main>
    </div>
  );
};

export default App;
