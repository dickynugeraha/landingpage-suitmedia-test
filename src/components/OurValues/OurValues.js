import React from "react";
import classes from "./OurValue.module.css";
import InovativeIcon from "../../assets/lightbulb-o.png";
import BankIcon from "../../assets/bank.png";
import RespectIcon from "../../assets/balance-scale.png";

const OurValues = () => {
  return (
    <div className={classes["our-value"]}>
      <h1>OUR VALUES</h1>
      <div className={classes.wrap}>
        <div className={`${classes.box} ${classes.danger}`}>
          <div className={classes.img}>
            <img src={InovativeIcon} alt="" />
          </div>
          <h3>INOVATIVE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            magnam, praesentium quis vitae voluptas delectus libero! Ut,
            quisquam cupiditate.
          </p>
        </div>
        <div className={`${classes.box} ${classes.success}`}>
          <div className={classes.img}>
            <img src={BankIcon} alt="" />
          </div>
          <h3>LOYALITY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            magnam, praesentium quis vitae voluptas delectus libero! Ut,
            quisquam cupiditate.
          </p>
        </div>
        <div className={`${classes.box} ${classes.primary}`}>
          <div className={classes.img}>
            <img src={RespectIcon} alt="" />
          </div>
          <h3>RESPECT</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            magnam, praesentium quis vitae voluptas delectus libero! Ut,
            quisquam cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
