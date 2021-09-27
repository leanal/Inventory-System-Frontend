import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import ProductEdit from "./ProductEdit";
import ProductSold from "./ProductSold";
import OutOfStock from "./OutOfStock";

function Layout() {
  return (
    <>
      <Header />
      <div className="container-sm container-lg">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/products/out-of-stock-products">
            <OutOfStock />
          </Route>
          <Route exact path="/products/:productId/sold">
            <ProductSold />
          </Route>
          <Route exact path="/products/:productId/edit">
            <ProductEdit />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
