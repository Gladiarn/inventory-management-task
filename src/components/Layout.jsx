import Navbar from "./Navbar";

export default function Layout({ children, darkMode, toggleDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </>
  );
}
