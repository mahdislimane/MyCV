import React from "react";
import "../App.css";
export default function Portfolio() {
  return (
    <div
      className="container-fluid row"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        onClick={() =>
          window.open("https://mahdislimane.github.io/LVL2checkpoint10/")
        }
        className="form col-12"
        src="1.png"
        alt=""
      />
      <img
        onClick={() =>
          window.open("https://mahdislimane.github.io/LVL2checkpoint007/")
        }
        className="form col-12"
        src="2.png"
        alt=""
      />
      <img
        onClick={() =>
          window.open("https://mahdislimane.github.io/routercheck/")
        }
        className="form col-12"
        src="3.png"
        alt=""
      />
    </div>
  );
}
