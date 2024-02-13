import React from "react";
import ReactDOM from "react-dom/client";
import App from "./composants/App";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Afficher() {
  return <App />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Afficher />);
