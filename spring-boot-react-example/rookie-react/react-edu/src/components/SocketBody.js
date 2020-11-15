import React, {useContext} from "react";
import UserSocket from "./UserSocket";
import {MainContext} from '../contexts/MainContext';


export default function SocketBody() {
    const {message} = useContext(MainContext);
    return(
        <div>
            <h3>{message}</h3>
            <UserSocket/>
        </div>
    )
}