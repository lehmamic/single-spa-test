import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogPage from "./catalog/catalog.component";

export default function Root(props) {
  return <section className="pizza-shop-catalog">
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" Component={CatalogPage} />
      </Routes>
    </BrowserRouter>
  </section>;
}
