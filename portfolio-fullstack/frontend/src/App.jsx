import { useState } from "react";
import Nav      from "./components/Nav";
import Footer   from "./components/Footer";
import HomePage    from "./pages/Home";
import AboutPage   from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage  from "./pages/Contact";
import "./styles/design-system.css";

/**
 * App
 * Root component — handles client-side page routing and
 * the global dark/light mode toggle.
 */
export default function App() {
  const [page,     setPage]     = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const renderPage = () => {
    switch (page) {
      case "Home":     return <HomePage     setPage={navigate} />;
      case "About":    return <AboutPage    setPage={navigate} />;
      case "Projects": return <ProjectsPage setPage={navigate} />;
      case "Contact":  return <ContactPage  setPage={navigate} />;
      default:         return <HomePage     setPage={navigate} />;
    }
  };

  return (
    <div
      className={darkMode ? "" : "light-mode"}
      style={{ minHeight: "100vh", background: "var(--background)", color: "var(--on-surface)" }}
    >
      <Nav
        page={page}
        setPage={navigate}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Page wrapper with enter animation keyed to current page */}
      <div className="page-enter" key={page}>
        {renderPage()}
      </div>

      <Footer setPage={navigate} />
    </div>
  );
}
