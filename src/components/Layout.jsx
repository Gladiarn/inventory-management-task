import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, darkMode, toggleDarkMode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
        />
        <main style={{ flex: 1, padding: "20px" ,backgroundColor: '#EEEEEE' }}>
          {children}
        </main>
      </div>
    </div>
  );
}