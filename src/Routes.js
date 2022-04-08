import {
    BrowserRouter,
    Routes as Switch,
    Route,
  } from "react-router-dom";
  import Home from "./pages/Home";
  import Product from "./pages/Product";

  export default function Routes() {
      return (
          <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
            </Switch>
          </BrowserRouter>
      );
  }