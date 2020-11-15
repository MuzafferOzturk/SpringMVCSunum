import React from "react";
import {MainContextProvider} from '../contexts/MainContext';
import SocketBody from "./SocketBody";

export default function Body() {
    return (
        <MainContextProvider>
            <SocketBody/>
        </MainContextProvider>
    )
}