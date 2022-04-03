import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tutorials() {
  const [underConst, setUnderConst] = useState({
    Docs: false,
    Tutorials: true,
    Community: false,
  });
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <div className="container">
      {underConst.Tutorials ? (
        <div
          class="alert alert-warning alert-dismissible fade show mt-3"
          role="alert"
        >
          <strong>Oups!</strong> Cette page n'existe pas! Redirection dans 5s
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        <h1>Tutoriel: Intro to React</h1>
      )}

      {/* <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Retour vers Docs
      </button>

      <button
        className="btn btn-success"
        onClick={() => navigate("/community")}
      >
        Vers Community
      </button> */}
    </div>
  );
}

export default Tutorials;
