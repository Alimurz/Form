import React from "react";
import styles from "./style.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import Input from "../../input";
import CheckBx from "../../checkbox";
import Btn from "../../button";
import FirstTxtBlock from "../../firsttext";
import { Controller, FormProvider, useForm } from "react-hook-form";
import SecTxt from "../../links/index";
import CustomInput from "../../custom-input";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

function LogIn() {
  const schema = yup.object().shape({
    userEmail: yup.string().email("Invalid email format").min(5, "В поле должно быть минимум 5 символов").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    'Пиши нормально!!!').required("Mail is required").transform(value => value === '' ? undefined : value),
    userPassword: yup.string().required("Password is required").min(8, "В поле должно быть минимум 8 символов")
  })
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <FormProvider>
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["logo"]}></div>
        <FirstTxtBlock
          title="Log in to your Account"
          subtitle="Welcome back, please enter your details."
        />
        <div className={styles["inputs"]}>
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            className={styles["inputs"]}
          />
          <span className={styles["or"]}>or</span>
          <Controller
            name="userEmail"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div>
                  <Input
                    label="Email Adress"
                    type="email"
                    value={field.value}
                    onChangeInput={field.onChange}
                    onBlur={field.onBlur}
                    hasError={fieldState.error}
                  />
                  <div>
                    {errors?.userEmail && (
                      <p className={styles["error"]}>
                        {errors?.userEmail?.message }
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div>
                  <CustomInput
                    label="Password"
                    type="password"
                    value={field.value}
                    onChangeInput={field.onChange}
                    onBlur={field.onBlur}
                    hasError={fieldState.error}
                  />
                  <div>
                    {errors?.userPassword && (
                      <p className={styles["error"]}>
                        {errors?.userPassword?.message}
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <CheckBx text="Forgot Password?" label="Remember Me" />
          <Btn value="Log In" type="submit" disabled={!isValid} />
        </div>
        <SecTxt path="/signup" direction="Sign Up" />
      </form>
    </FormProvider>
  );
}
export default LogIn;
