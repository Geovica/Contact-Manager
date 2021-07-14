import React from "react";
import transIcon from '../images/trash.svg';
import userIcon from '../images/user.png';
const ContactCard = (props) => {
    const { id, name, email} = props.contact;
    return (
     
        <div className="text-sm text-gray-500">
        <div className="grid grid-cols-2 gap-4 p-4">
            <div className="flex"> 
            <img src={userIcon} height={30} width={50} ></img> 
            <div>
            <h2>{name}</h2>
            <h3 className="text-xs font-light   ">{email}</h3>
            </div>
            </div>
            <img src={transIcon}
                height={20}
                width={20}
                className="col-end-7 col-span-2 "
                onClick={() => props.clickHandler(id)}/>
        </div>
        <hr  className="shadow-sm" />
    </div>
    )
}

export default ContactCard;