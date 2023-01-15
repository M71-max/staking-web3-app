import React from "react";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const Alerts = (props) => {
    // promises and use-effect for the fixed trans
    const successAlert =() => {toast.success('Successfully Indexing the block on the Chain', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });}

    const errorAlert = () => {toast.error('Error While Indexing Block', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });}

    const PoolAlert = async() => {
        if(flexPool3Claim && (!flexClaim3E && !flexPool3ClaimError)) {
            successAlert();
        }
        if(flexClaim1E && flexPool1ClaimError) {
            errorAlert();
        }
    };
    useEffect(() => {
        PoolAlert();
    }, [flexPool3Claim, flexPool3ClaimError]);

    return (
        
        
            <ToastContainer />
        

    );

}

export default Alerts;
