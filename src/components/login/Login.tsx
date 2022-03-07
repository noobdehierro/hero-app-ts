import { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { CustomInput } from "./elements/CustomInput";
import validator from "validator";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Display = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1d2b64; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f8cdda,
    #1d2b64
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f8cdda,
    #1d2b64
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  height: 550px;
  background-color: #00000076;
  border-radius: 50px;
  padding: 10px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #00000088;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 160px;
  border: 10px solid #00000088;
`;

const LoginButton = styled.button`
  background-color: transparent; /* Green */
  border: 2px solid #6a4caf;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
  margin: 5px;

  :hover {
    background-color: #6a4caf;
    cursor: pointer;
  }
`;

const RegisterButton = styled.button`
  background-color: #6a4caf; /* Green */
  border: 2px solid #6a4caf;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
  margin: 10px;

  :hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

const ErrorSpan = styled.span`
  color: #e5ff00;
  font-size: 16px;
`;

export const Login = () => {
  const { startLogin } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState({ email: "", password: "" });

  const { email, password } = loginForm;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      seterror((prev) => ({ ...prev, email: "Invalid Email, try again" }));
      return;
    } else {
      seterror((prev) => ({ ...prev, email: "" }));
    }
    if (validator.isEmpty(password)) {
      seterror((prev) => ({ ...prev, password: "password required" }));
      return;
    } else {
      seterror((prev) => ({ ...prev, password: "" }));
    }
    if (!validator.isLength(password, { min: 6 })) {
      seterror((prev) => ({ ...prev, password: "must be more than 6 digits" }));
      return;
    } else {
      seterror((prev) => ({ ...prev, password: "" }));
    }
    startLogin(email, password);
  };
  return (
    <Display>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <ImageContainer src="/user.png" alt="img" />

          <CustomInput name={"email"} type={"text"} setLoginForm={setLoginForm}>
            Email
          </CustomInput>
          {error.email && <ErrorSpan>{error.email}</ErrorSpan>}
          <CustomInput
            name={"password"}
            type={"password"}
            setLoginForm={setLoginForm}
          >
            Password
          </CustomInput>
          {error.password && <ErrorSpan>{error.password}</ErrorSpan>}

          <LoginButton type="submit">Login</LoginButton>
          <Link to={"/login/newUser"}>
            <RegisterButton type="button">Register</RegisterButton>
          </Link>
        </Form>
      </Container>
    </Display>
  );
};
