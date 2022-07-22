import { useState } from "react";
import styles from "../styles/Home.module.scss";

type FormProps = {
  email: string;
  password: string;
};

const Login = () => {
  const [form, setForm] = useState<FormProps>({} as FormProps);

  const onInputChange = (e: any) => {
    setForm((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <b>vConferences</b>
      </h1>
      <form onSubmit={onSubmit} className={styles.login}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
