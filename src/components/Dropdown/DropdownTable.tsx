import React from "react";
import './DropdownTable.scss'
import Activate from "../../assets/images/activate.svg"
import Blacklist from "../../assets/images/blacklist.svg"
import View from "../../assets/images/view.svg"

const DropdownTable = ({
  active,
  handleBlacklist,
  handleActive,
} : {
  active: Boolean;
  handleBlacklist: Function;
  handleActive: Function;
}) => {
  if(!active) {
    return null
  } else {
    return (
      <div className="drop">
        <div className="option">
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
