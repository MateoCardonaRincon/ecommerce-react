import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./home/pages/Home";
import Carrito from "./carrito/pages/Carrito";
import Header from "./shared/Header";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/carrito" component={Carrito} />
        <Redirect to="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
