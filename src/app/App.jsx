import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./layout/Layout";
import scss from "./App.module.scss";

const Home = lazy(() => import("./home/Home.jsx"));
const Catalog = lazy(() => import("./catalog/Catalog.jsx"));
const Favorite = lazy(() => import("./favorite/Favorite.jsx"));

export const App = () => {
  return (
    <div className={scss.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </div>
  );
};
