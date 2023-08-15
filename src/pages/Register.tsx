import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userApi } from "../api/apiQuery";
import { IUserCreatePayload } from "../api/contracts";
import { Btn, BtnGhost, H1ExtraBold } from "../components/Common.styled";
import { ButtonBlock, InputBlock, StyledLabel, StyledInput } from "../components/Form.styled";

interface IFormData {
  email: string;
  group: string;
  password: string;
  password2: string;
}

const schema = yup.object({
  email: yup.string().email("Некорректный Email").required("Email - обязательное поле"),
  group: yup.string().required("Группа - обязательное поле"),
  password: yup
    .string()
    .required("Введите пароль")
    .min(6, "Минимальная длина пароля - 6 символов")
    .max(24, "Максимальная длина пароля - 24 символа")
    .oneOf([yup.ref("password")], "Пароль и подтверждение не совпадают"),
  password2: yup
    .string()
    .required("Введите пароль")
    .oneOf([yup.ref("password")], "Пароль и подтверждение не совпадают"),
});

const defaultValues = {
  group: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [createUser, { isLoading, isSuccess }] = userApi.useNewUserMutation();

  const onCreate = useCallback((user: IUserCreatePayload) => createUser(user), [createUser]);

  const form = useForm<IFormData>({ defaultValues, resolver: yupResolver(schema) });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = ({ email, group, password }: IFormData) => {
    onCreate({ email, group, password });
  };

  useEffect(() => {
    if (isSuccess) navigate("/user");
  }, [isSuccess, navigate]);

  return (
    <>
      <H1ExtraBold>Регистрация пользователя</H1ExtraBold>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputBlock>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </InputBlock>

        <InputBlock>
          <StyledLabel htmlFor="group">Группа</StyledLabel>
          <StyledInput type="text" id="group" {...register("group")} />
          <p className="error">{errors.group?.message}</p>
        </InputBlock>

        <InputBlock>
          <StyledLabel htmlFor="password">Пароль</StyledLabel>
          <StyledInput type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </InputBlock>

        <InputBlock>
          <StyledLabel htmlFor="password2">Подтверждение пароля</StyledLabel>
          <StyledInput type="password" id="password2" {...register("password2")} />
          <p className="error">{errors.password2?.message}</p>
        </InputBlock>

        <ButtonBlock>
          <Btn disabled={isLoading}>Зарегистрировать</Btn>
          <BtnGhost onClick={() => navigate("/user")}>Войти</BtnGhost>
        </ButtonBlock>
      </form>
    </>
  );
};

const RegisterWithApi = () => (
  <ApiProvider api={userApi}>
    <Register />
  </ApiProvider>
);

export default RegisterWithApi;
