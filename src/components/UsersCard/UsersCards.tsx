import React from "react";
import usersPink from "../../assets/images/users-pink.svg"
import activeUsers from "../../assets/images/active-users.svg"
import loanUsers from "../../assets/images/loan-users.svg"
import savingsUsers from "../../assets/images/savings-users.svg"
import './UsersCards.scss'

const UsersCards = () => {
    const cardContents = [
        {
            id: 1,
            icon: usersPink,
            userType: 'Users',
            number: '2,453',
        },
        {
            id: 2,
            icon: activeUsers,
            userType: 'Active Users',
            number: '2,453',
        },
        {
            id: 3,
            icon: loanUsers,
            userType: 'Users with Loans',
            number: '12,453',
        },
        {
            id: 4,
            icon: savingsUsers,
            userType: 'Users with Savings',
            number: '102,453',
        },
    ]

  return (
   <div className="cards">
    {
        cardContents.map((cardContent) => {
            return (
                <div key={cardContent.id} className="card">
                    <div className="card-icon">
                        <img src={cardContent.icon} alt="" />
                    </div>
                    <h4>{cardContent.userType}</h4>
                    <h2>{cardContent.number}</h2>
                </div>
            )
        })
    }
   </div>
  );
};

export default UsersCards;
