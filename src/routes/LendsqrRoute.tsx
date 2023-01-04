import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserDetail from "../pages/UserDetail/UserDetail";

const LendsqrRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
    </>
  );
};

export default LendsqrRoute;
