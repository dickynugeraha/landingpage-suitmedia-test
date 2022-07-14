import React from "react";
import classes from "./Footer.module.css";
import twitterIcon from "../../assets/twitter.png";
import facebookIcon from "../../assets/facebook-official.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-content"]}>
        <h3 className="title">Suitmedia</h3>
      </div>
      <div className={classes["footer-bottom"]}>
        <p>
          Copyright &copy;2022, <span>Dicky Nugeraha</span>
        </p>
        <p
          style={{
            marginTop: "10px",
          }}
        >
          <span>
            <img
              style={{ width: "30px", marginRight: "10px" }}
              src={twitterIcon}
              alt=""
              srcset=""
            />
          </span>
          <span>
            <img
              src={facebookIcon}
              style={{ width: "30px" }}
              alt=""
              srcset=""
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
