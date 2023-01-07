import React from "react";
import './DropdownTable.scss'
import Activate from "../../assets/images/activate.svg"
import Blacklist from "../../assets/images/blacklist.svg"
import View from "../../assets/images/view.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DropdownTable = ({
  active,
  handleBlacklist,
  handleActive,
  id,
} : {
  active: Boolean;
  handleBlacklist: Function;
  handleActive: Function;
  id: Boolean;
}) => {

  const navigate = useNavigate();
  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
      localStorage.setItem("userdetails", JSON.stringify(res.data));
      navigate(`/userDetail`)
    } catch (error) {
      console.log(error)
    }
    
  }

  if(!active) {
    return null
  } else {
    return (
      <div className="drop">
        <div onClick={fetchUserDetails} className="option">
          <div>
            <img src={View} alt="" />
          </div>
          <p>View Details</p>
        </div>
        <div className="option" onClick={() => handleBlacklist()}>
          <div>
            <img src={Blacklist} alt="" />
          </div>
          <p>Blacklist User</p>
        </div>
        <div className="option" onClick={() => handleActive()}>
          <div>
            <img src={Activate} alt="" />
          </div>
          <p>Activate User</p>
        </div>
      </div>
    )
  }
};

export default DropdownTable;
