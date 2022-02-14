import Nav from "./Nav.jsx";
import { Link } from "solid-app-router";
import navLogo from "../assets/logo.jpeg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link href="/">
        <img src={navLogo} alt="Restaurant Logo" />
      </Link>
      <Nav />

      <footer className="main-footer">
      </footer>

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
