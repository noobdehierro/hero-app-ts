import { Route, Routes } from "react-router-dom";
import { Login } from "../components/login/Login";
import { NewUser } from "../components/newUser/NewUser";

export const DashBoardPublicRoutes = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newUser" element={<NewUser />} />


        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};
