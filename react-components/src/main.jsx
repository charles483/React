import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import "./index.css";
import List from "./List";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Heading />
    <List></List>
  </React.StrictMode>
);
