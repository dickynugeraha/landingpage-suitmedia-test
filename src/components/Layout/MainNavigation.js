import { Fragment } from "react";

import classes from "./MainNavigation.module.css";
import { a } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className={classes.navbar}>
      <a>
        <h1 className={`${classes.logo} logo`}>Suitmedia</h1>
      </a>
      <ul className={classes["nav-items"]}>
        <Fragment>
          <li className={classes.order}>
            <p>About</p>
            <div className={classes["dropdown-content"]}>
              <a>History</a>
              <a>Vision Mission</a>
            </div>
          </li>
          <li>
            <a>
              <p>Our Work</p>
            </a>
          </li>
          <li>
            <a>
              <p>Our Team</p>
            </a>
          </li>
          <li>
            <a>
              <p>Contact</p>
            </a>
          </li>
        </Fragment>
      </ul>
    </nav>
  );
};

export default MainNavigation;
