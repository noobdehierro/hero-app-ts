import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import validator from "validator";
import { AuthContext } from "../../context/AuthContext";

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
export const NewUser = () => {
  const {startRegister} = useContext(AuthContext);
  const [register, setRegister] = useState({
    name: "julion alvarez",
    email: "julion@gmail.com",
    password1: "123456",
    password2: "123456",
  });

  const { email, name, password1, password2 } = register;
  const [error, seterror] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleSubmitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validator.isEmpty(name)) {
      seterror((prev) => ({ ...prev, name: "name is required" }));
      return;
    } else {
      seterror((prev) => ({ ...prev, name: "" }));
    }

    if (!validator.isEmail(email)) {
      seterror((prev) => ({ ...prev, email: "Invalid Email, try again" }));
      return;
    } else {
      seterror((prev) => ({ ...prev, email: "" }));
    }

    if (!validator.isLength(password1, { min: 6 })) {
      seterror((prev) => ({
        ...prev,
        password1: "must be more than 6 digits",
      }));
      return;
    } else {
      seterror((prev) => ({ ...prev, password1: "" }));
    }

    if (password1 !== password2) {
      seterror((prev) => ({ ...prev, password2: "Passwords do not match" }));
      return;
    } else {
      seterror((prev) => ({ ...prev, password2: "" }));
    }

    startRegister(email,password1,name)
  };

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRegister((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <Display>
      <Container>
        <Form onSubmit={handleSubmitRegister}>
          <ImageContainer src="/user.png" alt="img" />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChangeInput}
          />
          {error.name && <ErrorSpan>{error.name}</ErrorSpan>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeInput}
          />
          {error.email && <ErrorSpan>{error.email}</ErrorSpan>}

          {/* span */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password1"
            id="password"
            value={password1}
            onChange={handleChangeInput}
          />
          {error.password1 && <ErrorSpan>{error.password1}</ErrorSpan>}

          {/* span */}
          <label htmlFor="passwordRepeat">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="passwordRepeat"
            value={password2}
            onChange={handleChangeInput}
          />
          {error.password2 && <ErrorSpan>{error.password2}</ErrorSpan>}

          <LoginButton type="submit">Register</LoginButton>
          <Link to={"/login/"}>
            <RegisterButton type="button">login</RegisterButton>
          </Link>
        </Form>
      </Container>
    </Display>
  );
};
