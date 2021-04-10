import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import axios from "axios";
import queryString from "querystring";

axios.defaults.baseURL = "https://ic1sz.sse.codesandbox.io/api";
axios.defaults.params = queryString.parse(location.search.slice(1));
console.log(queryString.parse(location.search.slice(1)));
window.axios = axios;

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
