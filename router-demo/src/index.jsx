import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/about";
import not from "./pages/notFound";
import { render } from "solid-js/web";

const root = document.getElementById("root");

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*404" component={not} />
      </Router>
    </div>
  );
}

render(() => <Router root={App} />, root);

export default App;