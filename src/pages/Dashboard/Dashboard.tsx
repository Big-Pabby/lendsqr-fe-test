import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import './Dashboard.scss'
import UsersCards from "../../components/UsersCard/UsersCards";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <section>
        <h2>Users</h2>
        <UsersCards />
      </section>
    </>
  );
};

export default Dashboard;
