import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
type CustomInpuProps = {
  name: string;
  type: string;
  placeholder?: string;
  children?: string;
  setLoginForm: Dispatch<SetStateAction<{ email: string; password: string }>>;
};
const InputContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: large;
  margin: 5px;
`;

const IconContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  border-style: none;
  padding: 0 10px;
`;

export const CustomInput = ({
  name,
  type,
  placeholder = "",
  children,
  setLoginForm,
}: CustomInpuProps) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <InputContainer>
      <Label htmlFor={name}>{children}</Label>
      <IconContainer className="input-wrapper">
        <Input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
      </IconContainer>
    </InputContainer>
  );
};
