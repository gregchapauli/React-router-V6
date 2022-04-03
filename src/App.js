import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";
import Installation from "./components/Installation";
import Fondamentaux from "./components/Fondamentaux";
import Hooks from "./components/Hooks";
import Users from "./components/Users";
import Profile from "./components/Profile";
import NoteUsers from "./components/NoteUsers";

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Navigate to="/docs" replace />} />
        <Route path="/docs" element={<Docs />}>
          <Route index element={<Installation />} />
          <Route path="installation" element={<Installation />} />
          <Route path="fondamentaux" element={<Fondamentaux />} />
          <Route path="hooks" element={<Hooks />} />
        </Route>
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/community" element={<Community />} />
        <Route path="users" element={<Users />}>
          <Route path=":profilId" element={<Profile />} />
          <Route path="noteUsers" element={<NoteUsers />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
