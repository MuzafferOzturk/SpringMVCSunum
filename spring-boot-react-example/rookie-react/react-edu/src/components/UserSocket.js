import React, {useContext} from "react";
import SockJsClient from 'react-stomp';
import {MainContext} from "../contexts/MainContext";
import {setMessage} from '../actions/MainActions';
export default function UserSocket(){
    let clientRef = null;
    const {message, dispatch} = useContext(MainContext);
    const receiveMessage = (msg) => {
        dispatch(setMessage(msg));
    };
    return(
        <div>
            <SockJsClient
                url ='http://localhost:8080/user-socket'
                topics={['/topic/user']}
                onMessage={(msg) => receiveMessage(msg)}
                onConnect={() => {console.log("Connected")}}
                onDisconnect={ () => {console.log("Disconnect")}}
                ref={(client) => {clientRef = client}}
            />
        </div>
    )
}