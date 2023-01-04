import React from "react";
import './Navigation.scss'
import Logo from "../../assets/images/lendLogo.svg"
import Search from "../../assets/images/search.svg"
import Bell from "../../assets/images/bell.svg"
import Avatar from "../../assets/images/avatar.png"
import Drop from "../../assets/images/drop.svg"
import Briefcase from "../../assets/images/briefcase.svg"
import arrowDown from "../../assets/images/arrow-down.svg"
import Home from "../../assets/images/home 1.svg"
import Users from "../../assets/images/users.svg"
import userFriends from "../../assets/images/user-friends.svg"
import Sack from "../../assets/images/sack.svg"
import handshakeRegular from "../../assets/images/handshake-regular.svg"
import piggyBank from "../../assets/images/piggy-bank.svg"
import loanRequests from "../../assets/images/loan-request.svg"
import userCheck from "../../assets/images/user-check.svg"
import userTimes from "../../assets/images/user-times.svg"
import npBank from "../../assets/images/np-bank.svg"
import coinsSolid from "../../assets/images/coins-solid.svg"
import Transaction from "../../assets/images/transaction.svg"
import Galaxy from "../../assets/images/galaxy.svg"
import Scroll from "../../assets/images/scroll.svg"
import userCog from "../../assets/images/user-cog.svg"
import chartBar from "../../assets/images/chart-bar.svg"
import slidersH from "../../assets/images/sliders-h.svg"
import badgePercent from "../../assets/images/badge-percent.svg"
import clipboardList from "../../assets/images/clipboard-list.svg"

const Navigation = () => {
    const navOptions = [
        {
            id: 1,
            type: 'Customer',
            typeOptions: [
                {
                    id: 1,
                    name: 'User',
                    icon: userFriends
                },
                {
                    id: 2,
                    name: 'Guarantors',
                    icon: Users
                },
                {
                    id: 3,
                    name: 'Loans',
                    icon: Sack
                },
                {
                    id: 4,
                    name: 'Decision Models',
                    icon: handshakeRegular
                },
                {
                    id: 5,
                    name: 'Savings',
                    icon: piggyBank
                },
                {
                    id: 6,
                    name: 'Loan Requests',
                    icon: loanRequests
                },
                {
                    id: 7,
                    name: 'Whitelist',
                    icon: userCheck
                },
                {
                    id: 8,
                    name: 'Karma',
                    icon: userTimes
                },
            ]
        },
        {
            id: 2,
            type: 'Businesses',
            typeOptions: [
                {
                    id: 1,
                    name: 'Organization',
                    icon: Briefcase
                },
                {
                    id: 2,
                    name: 'Loan Products',
                    icon: Sack
                },
                {
                    id: 3,
                    name: 'Savings Products',
                    icon: npBank
                },
                {
                    id: 4,
                    name: 'Fees and Charges',
                    icon: coinsSolid
                },
                {
                    id: 5,
                    name: 'Transactions',
                    icon: Transaction
                },
                {
                    id: 6,
                    name: 'Services',
                    icon: Galaxy
                },
                {
                    id: 7,
                    name: 'Service Account',
                    icon: userCog
                },
                {
                    id: 8,
                    name: 'Settlements',
                    icon: Scroll
                },
                {
                    id: 9,
                    name: 'Reports',
                    icon: chartBar
                },
            ]
        },
        {
            id: 3,
            type: 'Settings',
            typeOptions: [
                {
                    id: 1,
                    name: 'Preferences',
                    icon: slidersH
                },
                {
                    id: 2,
                    name: 'Fees and Pricing',
                    icon: badgePercent
                },
                {
                    id: 3,
                    name: 'Audit Logs',
                    icon: clipboardList
                },
            ]
        },
    ]

  return (
    <section>
        <header>
            <div className="container">
                <nav>
                    <div className="left">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="searchField">
                            <div className="search">
                                <input type="text" placeholder="Search for anything" />
                            </div>
                            <button><img src={Search} alt="" /></button>
                        </div>
                    </div>
                    <div className="right">
                        <a href="#">docs</a>
                        <div className="bell">
                            <img src={Bell} alt="" />
                        </div>
                        <div className="user">
                            <div className="avatar">
                                <img src={Avatar} alt="" />
                            </div>
                            <h4>Adedeji</h4>
                            <div>
                                <img src={Drop} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <div className="side-bar">
            <div className="link">
                <div>
                    <img src={Briefcase} alt="" />
                </div>
                <h5>Switch Organization</h5>
                <div>
                    <img src={arrowDown} alt="" />
                </div>
            </div>
            <div className="link">
                <div>
                    <img src={Home} alt="" />
                </div>
                <h5>Dashboard</h5>
            </div>
            {
                navOptions.map((navOption) => {
                    return (
                        <div key={navOption.id} className="nav-option">
                            <h4>{navOption.type}</h4>
                            {
                                navOption.typeOptions.map((typeOption) => {
                                    return(
                                        <div key={typeOption.id} className="link">
                                            <div>
                                                <img src={typeOption.icon} alt="" />
                                            </div>
                                            <h5>{typeOption.name}</h5>
                                        </div>                  
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    </section>
  );
};

export default Navigation;
