import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";
import Installation from "./components/installation";
import Fondamentaux from "./components/fondamentaux";
import Hooks from "./components/hooks";

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Navigate to="/docs" replace />} />
        <Route path="/docs" element={<Docs />}>
          <Route path="installation" element={<Installation />} />
          <Route path="fondamentaux" element={<Fondamentaux />} />
          <Route path="hooks" element={<Hooks />} />
        </Route>
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/community" element={<Community />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
