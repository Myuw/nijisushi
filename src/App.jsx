import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";
import Layout from "./components/Layout";

const Menu = lazy(() => import("./pages/menu.jsx"));

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
