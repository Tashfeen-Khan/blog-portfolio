import React from 'react'
import {  toast } from 'react-toastify';
const Tostnosify = ({type,message}) => {
    const notify = () => {toast[type](message);};
    return null;
}

export default Tostnosify