import Nav from "./Nav.jsx";
import navLogo from "../assets/logo.jpeg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={navLogo} alt="Restaurant Logo" />

      <Nav />

      <style jsx global>{`
        .sidebar {
          font-size: 14px;
        }

        .sidebar img {
          width: 100%;
        }

        .main-footer {
          text-align: center;
        }
      `}</style>
    </aside>
  );
}
