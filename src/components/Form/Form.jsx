import s from "./Form.module.css";

import { Validations } from "./validations.js";

import { useState } from "react";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validations({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <form className={s.p} onSubmit={handleSubmit}>
      <label className={s.labelX}>Email: </label>
      <input
        className={s.input}
        type="text"
        placeholder="Email..."
        name="email"
        onChange={handleChange}
      />
      <br />
      {errors.email ? <span className={s.errors}>{errors.email}</span> : null}

      <br />
      <br />

      <label className={s.labelX}>Password: </label>
      <input
        className={s.input}
        type="text"
        placeholder="Password..."
        name="password"
        onChange={handleChange}
      />
      <br />
      {errors.password ? (
        <span className={s.errors}>{errors.password}</span>
      ) : null}

      <br />
      <br />

      <button
        className={s.button}
        type="submit"
        disabled={
          !userData.email ||
          !userData.password ||
          errors.email ||
          errors.password
        }
      >
        Submit
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className={s.labelX}>EMAIL = "wilson.aponte000@gmail.com"</div>

      <br />
      <br />

      <div className={s.labelX}>PASSWORD = "123456sS"</div>
    </form>
  );
}
