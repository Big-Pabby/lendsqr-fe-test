import React from "react";
import DropdownTable from "../Dropdown/DropdownTable";
import moment from "moment";
import Options from "../../assets/images/option.svg"
import { useState } from "react";

const UserRow = ({
    orgName,
    userName,
    email,
    phoneNumber,
    createdAt,
    id,
} : {
    orgName: String;
    userName: String;
    email: String;
    phoneNumber: String;
    createdAt: any;
    id: Boolean;
}) => {

    const [status, setStatus] = useState<String>("Pending")
    const [dropDown, setDropDown] = useState<Boolean>(false)

    const handleDrop = () => {
        setDropDown(!dropDown)
    }

    const handleBlackList = () => {
        setStatus("Blacklist")
        setDropDown(false)
    }
    const handleActive = () => {
        setStatus("Active")
        setDropDown(false)
    }
  return (
    <tr>
        <td className=" ">
        {orgName}
        </td>
        <td className="">
        {userName}
        </td>

        <td className="">
        {email}
        </td>
        <td className="">
        {phoneNumber}
        </td>
        <td className="">
        {moment.utc(createdAt).format('LLL')}
        </td>
        <td className="">
        <div className="status">
            <div className={status === 'Pending' ? 'pending' : status === 'Blacklist' ? 'blacklist' : status === 'Active' ? 'active' : 'inactive'}>
            {status}
            </div>
            <div onClick={() => handleDrop()} >
            <img src={Options} alt=""  />
            </div>
        </div>
        </td>
        <DropdownTable active={dropDown} handleBlacklist={() => handleBlackList()} handleActive={() => handleActive()} id={id} />
    </tr>
  );
};

export default UserRow;
