import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import './Dashboard.scss'
import UsersCards from "../../components/UsersCard/UsersCards";
import Table from "../../components/Table/Table";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <section>
        <h2>Users</h2>
        <UsersCards />
        <Table />
      </section>
    </>
  );
};

export default Dashboard;
