import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center m-5">
      <h1 className="font-bold">Page Not Found</h1>
      <img src="/404-error.png" alt="404" className="img-fluid" />{" "}
    </div>
  );
}
