import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import './UserDetail.scss'
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/images/back.svg"
import UserHeader from "../../components/User/UserHeader";
import Information from "../../components/User/Information";

const UserDetail = () => {

  //@ts-ignore
  const userDetails = JSON.parse(localStorage.getItem('userdetails'))

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }


  return (
    <>
      <Navigation />
      <section>
        <div className="back" onClick={() => goBack()}>
          <div><img src={Arrow} alt="" /></div>
          <p>Back to Users</p>
        </div>
        <div className="title">
          <div>
          <h2>User Details</h2>
          </div>
          <div className="btn">
            <button className="black">Blacklist User</button>
            <button className="active">Activate User</button>
          </div>
        </div>
        <UserHeader
          profile={userDetails.profile}
          accountNumber={userDetails.accountNumber}
          accountBalance={userDetails.accountBalance}
        />
        <Information userData={userDetails} />
      </section>
    </>
  );
};

export default UserDetail;
