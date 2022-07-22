import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.scss";

const Login = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (values: any) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("key", data.key);
        router.push("/conferences");
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <b>vConferences</b>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
