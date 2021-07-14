import React from "react";
import { Link } from "react-router-dom";
import trashIcon from '../images/trash.svg';
import editIcon from '../images/edit.svg';
import userIcon from '../images/user.png';
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (

        <div className="container text-sm text-gray-500">
            <div className="flex flex-nowrap w-80">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="p-4 w-72">
                        <img alt="user" src={userIcon} height={30} width={50} ></img>
                        <div>

                            <h2>{name}</h2>
                            <h3 className="text-xs font-light">{email}</h3>

                        </div>
                    </div>
                </Link>
            <div className="p-4">
                <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                    <img className="m-2" alt="edit" src={editIcon}
                        height={20}
                        width={20}
                         />
                </Link>
                
                <Link to={{pathname: `/`}} >
                <img className="m-2 pl-2 " alt="trash" src={trashIcon}
                    height={20}
                    width={20}
                    className="col-end-7 col-span-2 "
                    onClick={() => props.clickHandler(id)} />
                </Link>
            </div>

            </div>
            <hr className="shadow-sm" />
        </div>
    )
}

export default ContactCard;