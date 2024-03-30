import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
