import React from "react";
import { Link } from "react-router-dom";
import userIcon from '../images/user.png';
const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="m-auto">
                <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={userIcon} alt="" />
                        <div className="flex flex-col text-center md:text-left">
                            <div className="font-medium text-lg text-gray-800">{name}</div>
                            <div className="text-gray-500 mb-3 whitespace-nowrap">{email}</div>
                        </div>
                    </div>
                </div>
                <Link to="/">
                <button className="ml-12 pl-5  mt-5 pt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Back to List</button>
                </Link>
            </div>

        </div>

    );
}

export default ContactDetails;