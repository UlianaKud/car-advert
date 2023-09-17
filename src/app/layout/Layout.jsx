import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import TopNavigation from "../topNavigation/TopNavigation";
import Footer from "../footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>...Loading</div>}>
        <TopNavigation />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
};
