import React from "react";
import Logo from "../components/Logo.tsx";

const Error = () => {
  return (
    <div>
      <Logo />
      <div className="error">
        <h1>Error 404: Page not found</h1>
        <p>
          <a href="/">Revenir a la page principal</a>
        </p>
      </div>
    </div>
  );
};

export default Error;
