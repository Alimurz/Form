import React from "react";
import styles from "./style.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import Input from "../../input";
import Btn from "../../button";
import CheckBx from "../../checkbox";
import SecTxt from "../../links/index";
import FirstTxtBlock from "../../firsttext";
import CustomInput from "../../custom-input";

import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

import { Controller, FormProvider, useForm } from "react-hook-form";

function SignUp() {
  const schema = yup.object().shape({
    userName: yup.string().min(5, "В поле должно быть минимум 5 символов").required("Username is required").transform(value => value === '' ? undefined : value),
    userEmail: yup.string().email("Invalid email format").min(5, "В поле должно быть минимум 5 символов").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    'Пиши нормально!!!').required("Mail is required").transform(value => value === '' ? undefined : value),
    userPassword: yup.string().required("Password is required").min(8, "В поле должно быть минимум 8 символов"),
    userPasswordConfirm: yup.string().required("Password confirmation is required").oneOf([yup.ref('userPassword'), null], 'Passwords must match')
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
    console.log(data);
  };


  return (
    <FormProvider>
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["logo"]}></div>
        <FirstTxtBlock
          title="Create an Account"
          subtitle="Sign up now to get started with an account."
        />
        <div className={styles["inputs"]}>
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            className={styles["inputs"]}
          />
          <span className={styles["or"]}>or</span>
          <Controller
            name="userName"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div>
                  <Input
                    label="Username"
                    type="text"
                    value={field.value}
                    onChangeInput={field.onChange}
                    onBlur={field.onBlur}
                    hasError={fieldState.error}
                  />
                  <div>
                    {errors?.userName && (
                      <p className={styles["error"]}>
                        {errors?.userName?.message}
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />
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
                        {errors?.userEmail?.message}
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
                        {errors?.userPassword?.message }
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <Controller
            name="userPasswordConfirm"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div>
                  <CustomInput
                    label="Password Confirm"
                    type="password"
                    value={field.value}
                    onChangeInput={field.onChange}
                    onBlur={field.onBlur}
                    hasError={fieldState.error}
                  />
                  <div>
                    {errors?.userPasswordConfirm && (
                      <p className={styles["error"]}>
                        {errors?.userPasswordConfirm?.message }
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />

          <CheckBx
            text="Terms of Service"
            label="I have read and agree to the"
          />
          <Btn type="submit" value="Sign In" disabled={!isValid} />
        </div>
        <SecTxt path="/login" direction="Log In" />
      </form>
    </FormProvider>
  );
}
export default SignUp;
