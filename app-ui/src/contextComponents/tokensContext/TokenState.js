import { useEffect, useState } from 'react';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { ToastContainer, toast } from "react-toastify";

import TokenContext from './TokenContext.js';
import tokenAbi from '../../contractAbi/TokenAbi';
import sleep from '../../components/Pause.js';

import 'react-toastify/dist/ReactToastify.css';

const tokenContractConfig = {
    address: process.env.React_App_Token_Address,
    abi: tokenAbi,
};

const stakeAddress = process.env.React_App_Staking_Address;

const TokenState = (props) => {
    const approveAmount1 = '2000000000000000000';
    const approveAmount2 = '4000000000000000000';
    const approveAmount3 = '8000000000000000000';

    const successAlert =() => {toast.success('Successfully Indexed the block on the Chain', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });}

    // prepare write hooks
    const { config: tokenApproveConfig1 } = usePrepareContractWrite({
        ...tokenContractConfig,
        functionName: 'approve',
        args:[ stakeAddress, approveAmount1 ],
    });
    const { config: tokenApproveConfig2 } = usePrepareContractWrite({
        ...tokenContractConfig,
        functionName: 'approve',
        args:[ stakeAddress, approveAmount2 ],
    });
    const { config: tokenApproveConfig3 } = usePrepareContractWrite({
        ...tokenContractConfig,
        functionName: 'approve',
        args:[ stakeAddress, approveAmount3 ],
    });

    // write hooks
    const {
        data: approveData1,
        write: approveTokenPool1,
        isLoading: approveToken1Loading,
    } = useContractWrite(tokenApproveConfig1);
    const {
        data: approveData2,
        write: approveTokenPool2,
        isLoading: approveToken2Loading,
    } = useContractWrite(tokenApproveConfig2);
    const {
        data: approveData3,
        write: approveTokenPool3,
        isLoading: approveToken3Loading,
    } = useContractWrite(tokenApproveConfig3);

    // wait for trans completion hook
    const {isSuccess: pool1approve } = useWaitForTransaction({
        hash: approveData1?.hash,
    });
    const {isSuccess: pool2approve } = useWaitForTransaction({
        hash: approveData2?.hash,
    });
    const {isSuccess: pool3approve } = useWaitForTransaction({
        hash: approveData3?.hash,
    });

    const [ state, setState ] = useState({
        isLoading1: approveToken1Loading,
        isSuccess1: pool1approve,
        isLoading2: approveToken2Loading,
        isSuccess2: pool2approve,
        isLoading3: approveToken3Loading,
        isSuccess3: pool3approve,
    });

    // promises for the trans function (write)
    const tokenApproval1Alert = async() => {
        if(pool1approve) {
            await sleep(5000);
            successAlert();
        }
    };
    const tokenApproval2Alert = async() => {
        if(pool2approve) {
            await sleep(5000);
            successAlert();
        }
    };
    const tokenApproval3Alert = async() => {
        if(pool3approve) {
            await sleep(5000);
            successAlert();
        }
    };

    // use-effect for alert on trans completion
    useEffect(() => {
        tokenApproval1Alert();
    }, [pool1approve]);
    useEffect(() => {
        tokenApproval2Alert();
    }, [pool2approve]);
    useEffect(() => {
        tokenApproval3Alert();
    }, [pool3approve]);

    return (
        <TokenContext.Provider value={ {state: state, approve1: approveTokenPool1, approve2: approveTokenPool2, approve3: approveTokenPool3 } }>
            { props.children }
            <ToastContainer />
        </TokenContext.Provider>
    );
}

export default TokenState;
