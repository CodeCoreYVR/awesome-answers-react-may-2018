import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Session from "./requests/session";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";

Session.create({ email: "js@winterfell.gov", password: "supersecret" });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
