import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Privatepage = ({ children }) => {
    const token = Cookies.get("access_tok");
    if (!token) {
        return <Navigate to={"/login"} />
    }
    return children;

}

export default Privatepage
