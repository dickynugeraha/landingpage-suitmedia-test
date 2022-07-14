import { useState } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("a");
  const [email, setEmail] = useState("@.");
  const [message, setMessage] = useState("a");

  const submitContactHandler = (e) => {
    e.preventDefault();

    if (name === "a") {
      setName("");
    }
    if (email === "@.") {
      setEmail("");
    }
    if (message === "a") {
      setMessage("");
    }

    return;
  };

  return (
    <form className={classes.contact} onSubmit={submitContactHandler}>
      <h1>CONTACT US</h1>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          className={name.length === 0 ? `${classes.invalid}` : ""}
          type="text"
          name="name"
          id=""
          onChange={(e) => setName(e.target.value)}
        />
        {name.length === 0 && (
          <p className={classes.invalid}>Name is required!</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          className={
            email.length === 0 || !email.includes("@") || !email.includes(".")
              ? `${classes.invalid}`
              : ""
          }
          type="email"
          name="email"
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        {(name.length === 0 ||
          !email.includes("@") ||
          !email.includes(".")) && (
          <p className={classes.invalid}>Email must be true value!</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="name">Message</label>
        <textarea
          className={message.length === 0 ? classes.invalid : ""}
          name="message"
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
        />
        {message.length === 0 && (
          <p className={classes.invalid}>Message is required!</p>
        )}
      </div>
      <div className="action">
        <button className="primary">SUBMIT</button>
      </div>
    </form>
  );
};

export default Contact;
