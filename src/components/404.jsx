import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main>
      <div className="404page">
        <h1>OOPS!!!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Go Home</Link>
      </div>
    </main>
  );
};