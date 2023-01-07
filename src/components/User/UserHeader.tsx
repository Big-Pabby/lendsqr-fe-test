import React from "react";
import UserAvatar from "../../assets/images/useravatar.svg"
import Starfull from "../../assets/images/starfull.svg"
import Star from "../../assets/images/star.svg"
import './UserHeader.scss'

const User = ({
  profile,
  accountNumber,
  accountBalance,
} : {
  profile: any;
  accountNumber: string;
  accountBalance: string;
}) => {
  return (
    <div className="header">
      <div className="profileDetail">
        <div className="profile">
          <div className="profile-image">
            <img src={profile.avatar !== undefined ? profile.avatar : UserAvatar} alt="" />
          </div>
          <div className="user">
            <h2>{profile.firstName} {profile.lastName}</h2>
            <p>{accountNumber}</p>
          </div>
        </div>
        <div className="user-tier">
          <p>User’s Tier</p>
          <div className="rating">
            <div>
              <img src={Starfull} alt="" />
            </div>
            <div>
              <img src={Star} alt="" />
            </div>
            <div>
              <img src={Star} alt="" />
            </div>
          </div>
        </div>
        <div className="account">
          <h2>#{accountBalance}</h2>
          <p>{profile.bvn}/Providus Bank</p>
        </div>
      </div>
      <div className="profilenav">
        <p className="active">General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </div>
  );
};

export default User;
