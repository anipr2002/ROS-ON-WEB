import { ReactNode } from "react";

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="block w-60 h-screen border-r border-solid border-gray-800 pt-3">
      {children}
    </aside>
  );
};

export default Sidebar;
