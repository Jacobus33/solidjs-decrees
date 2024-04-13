import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";
import Users from "./pages/Users";
console.log(Home);
console.log(Users);

const App = props => (
  <>
    <h1>Site Title</h1>
    {props.children}
  </>
)

render(() => (
  <Router root={App}>
    {/* <Route path="/" component={Home} />
    <Route path="/users" component={Users} /> */}
  </Router>
), document.getElementById("root"));