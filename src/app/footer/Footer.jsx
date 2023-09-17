import React from "react";
import scss from "./Footer.module.scss";
import githubLogo from "../images/github.svg";

const Footer = () => {
  return (
    <div className={scss.footer}>
      <div className={scss.footerContainer}>
        <p>© 2023 | All Rights Reserved |&nbsp;</p>
        <p className={scss.footer__text}>Created by</p>
        <div>
          <a href="https://github.com/UlianaKud" target="_blank">
            <img src={githubLogo} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
