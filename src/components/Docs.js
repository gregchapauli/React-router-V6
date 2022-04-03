import React from "react";
import { Link, Outlet } from "react-router-dom";

function Docs() {
  return (
    <div className="container">
      <h1>Getting Started</h1>
      <nav className="nav">
        <Link className="nav-link" to="installation">
          Installation
        </Link>
        <Link className="nav-link" to="fondamentaux">
          Fondamentaux
        </Link>
        <Link className="nav-link" to="hooks">
          Hooks
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Docs;
