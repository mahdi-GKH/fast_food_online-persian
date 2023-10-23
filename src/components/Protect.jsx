import { UseSelector, useSelector } from "react-redux";


import { Navigate } from "react-router-dom";


export default function Protect({children}){
    const user = useSelector((state)=> state.data.user.login)
    if(!user){
        return <Navigate to="/login" />
    }
    return children;
}