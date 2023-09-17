import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import "./TopNavigationStyles.scss";
import scss from "./TopNavigation.module.scss";
import logo from "../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const TopNavigation = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("home");
    } else {
      setActiveItem(pathname.replace("/", ""));
    }
  }, [pathname]);

  const handleItemClick = (e, to) => {
    navigate(to.name === "home" ? "/" : `/${to.name}`);
  };

  return (
    <Menu secondary className={scss.topNavigation}>
      <Menu.Item className={scss.topNavigation__logo}>
        <img alt="logo" src={logo} />
      </Menu.Item>
      <Menu.Menu className="topNavigation__menu_action">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="catalog"
          active={activeItem === "catalog"}
          onClick={handleItemClick}
        >
          Catalog
        </Menu.Item>

        <Menu.Item
          name="favorites"
          active={activeItem === "favorites"}
          onClick={handleItemClick}
        >
          Favorites
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default TopNavigation;
