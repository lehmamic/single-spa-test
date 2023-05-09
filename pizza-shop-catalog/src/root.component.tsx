import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./catalog";

export default function Root(props) {
  return <section className="pizza-shop-catalog">
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" Component={Catalog} />
      </Routes>
    </BrowserRouter>
  </section>;
}
