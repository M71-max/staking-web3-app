import { useEffect, createContext, useContext } from "react";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { ToastContainer, toast } from "react-toastify";

import StakeContext from "./StakeContext"; 
import StakeAbi from '../../contractAbi/StakingAbi';
import sleep from "../../components/Pause";

import 'react-toastify/dist/ReactToastify.css';

const stakeContractConfig = {
    address: process.env.React_App_Staking_Address,
    abi: StakeAbi,
};

const StakingState = (props) => {
    let success = createContext();
    let error1 = createContext();
    let error2 = createContext();

    const poolId1 = 0;
    const poolId2 = 1;
    const poolId3 = 2;

    // fixed staking configs
    const { config: stakeFixConfig1 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'fixStake',
        args:[ poolId1 ],
    });
    const { config: stakeFixConfig2 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'fixStake',
        args:[ poolId2 ],
    });
    const { config: stakeFixConfig3 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'fixStake',
        args:[ poolId3 ],
    });

    // flexible pools configs
    const { config: flexPoolStakeConfig1 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'flexStake',
        args:[ poolId1 ],
    });
    const { config: flexPoolStakeConfig2 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'flexStake',
        args:[ poolId2 ],
    });
    const { config: flexPoolStakeConfig3 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'flexStake',
        args:[ poolId3 ],
    });

    // claim configs Fixed
    const { config: claimFixedConfig1 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'claimFixStake',
        args:[ poolId1 ],
    });
    const { config: claimFixedConfig2 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'claimFixStake',
        args:[ poolId2 ],
    });
    const { config: claimFixedConfig3 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'claimFixStake',
        args:[ poolId3 ],
    });

    // claim flexible configs
    const { config: claimFlexConfig1 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'claimFlexReward',
        args:[ poolId1 ],
    });
    const { config: claimFlexConfig2 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'claimFlexReward',
        args:[ poolId2 ],
    });
    const { config: claimFlexConfig3 } = usePrepareContractWrite({
        ...stakeContractConfig,
        functionName: 'claimFlexReward',
        args:[ poolId3 ],
    });

    // fixed staking writes & wait for completion
    const {
        data: fixStake1Data,
        write: fixStake1,
        isLoading: fixStake1Load,
        isError: fixStake1E,
    } = useContractWrite(stakeFixConfig1);
    const {isSuccess: pool1Staking, isError: fixStake1Error } = useWaitForTransaction({
        hash: fixStake1Data?.hash,
    });
    const {
        data: fixStake2Data,
        write: fixStake2,
        isLoading: fixStake2Load,
        isError: fixStake2E,
    } = useContractWrite(stakeFixConfig2);
    const {isSuccess: pool2Staking, isError: fixStake2Error } = useWaitForTransaction({
        hash: fixStake2Data?.hash,
    });
    const {
        data: fixStake3Data,
        write: fixStake3,
        isLoading: fixStake3Load,
        isError: fixStake3E,
    } = useContractWrite(stakeFixConfig3);
    const {isSuccess: pool3Staking, isError: fixStake3Error } = useWaitForTransaction({
        hash: fixStake3Data?.hash,
    });

    // flex pool write & wait for trans completion
    const {
        data: flexPool1Data,
        write: flexPool1,
        isLoading: flexPool1Loading,
        isError: flexStake1E,
    } = useContractWrite(flexPoolStakeConfig1);
    const {isSuccess: flexPool1Staking, isError: flexStake1Error } = useWaitForTransaction({
        hash: flexPool1Data?.hash,
    });

    const {
        data: flexPool2Data,
        write: flexPool2,
        isLoading: flexPool2Loading,
        isError: flexStake2E,
    } = useContractWrite(flexPoolStakeConfig2);
    const {isSuccess: flexPool2Staking, isError: flexStake2Error } = useWaitForTransaction({
        hash: flexPool2Data?.hash,
    });

    const {
        data: flexPool3Data,
        write: flexPool3,
        isLoading: flexPool3Loading,
        isError: flexStake3E,
    } = useContractWrite(flexPoolStakeConfig3);
    const {isSuccess: flexPool3Staking, isError: flexStake3Error } = useWaitForTransaction({
        hash: flexPool3Data?.hash,
    });

    // claim fixed pool writes
    const {
        data: fixClaimData1,
        write: fixClaim1,
        isLoading: fixClaim1Loading,
        isError: fixClaim1E,
    } = useContractWrite(claimFixedConfig1);
    const {isSuccess: fixPool1Claim, isError: fixPool1ClaimError } = useWaitForTransaction({
        hash: fixClaimData1?.hash,
    });

    const {
        data: fixClaimData2,
        write: fixClaim2,
        isLoading: fixClaim2Loading,
        isError: fixClaim2E,
    } = useContractWrite(claimFixedConfig2);
    const {isSuccess: fixPool2Claim, isError: fixPool2ClaimError } = useWaitForTransaction({
        hash: fixClaimData2?.hash,
    });

    const {
        data: fixClaimData3,
        write: fixClaim3,
        isLoading: fixClaim3Loading,
        isError: fixClaim3E,
    } = useContractWrite(claimFixedConfig3);
    const {isSuccess: fixPool3Claim, isError: fixPool3ClaimError } = useWaitForTransaction({
        hash: fixClaimData3?.hash,
    });

    // claim flexible pools writes & trans wait
    const {
        data: flexClaimData1,
        write: flexClaim1,
        isLoading: flexClaim1Loading,
        isError: flexClaim1E,
    } = useContractWrite(claimFlexConfig1);
    const {isSuccess: flexPool1Claim, isError: flexPool1ClaimError } = useWaitForTransaction({
        hash: flexClaimData1?.hash,
    });

    const {
        data: flexClaimData2,
        write: flexClaim2,
        isLoading: flexClaim2Loading,
        isError: flexClaim2E,
    } = useContractWrite(claimFlexConfig2);
    const {isSuccess: flexPool2Claim, isError: flexPool2ClaimError } = useWaitForTransaction({
        hash: flexClaimData2?.hash,
    });

    const {
        data: flexClaimData3,
        write: flexClaim3,
        isLoading: flexClaim3Loading,
        isError: flexClaim3E,
    } = useContractWrite(claimFlexConfig3);
    const {isSuccess: flexPool3Claim, isError: flexPool3ClaimError } = useWaitForTransaction({
        hash: flexClaimData3?.hash,
    });

    // promises and use-effect for the fixed trans
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

    useEffect(() => {
        success = pool1Staking;
        error1 = fixStake1Error;
        error2 = fixStake1E;
    }, [pool1Staking, fixStake1Error, fixStake1E]);
    useEffect(() => {
        success = pool2Staking;
        error1 = fixStake2Error;
        error2 = fixStake2E;
    }, [pool2Staking, fixStake2Error, fixStake2E]);
    useEffect(() => {
        success = pool3Staking;
        error1 = fixStake3Error;
        error2 = fixStake3E;
    }, [pool3Staking, fixStake3Error, fixStake3E]);

    const fixStakePool1Alert = async() => {
        if(pool1Staking && (!fixStake1Error || !fixStake1E)) {
            await sleep(10000);
            successAlert();
        }
        if(fixStake1Error || fixStake1E) {
            errorAlert();
        }
    };
    useEffect(() => {
        fixStakePool1Alert();
    }, [pool1Staking, fixStake1Error, fixStake1E]);

    const fixStakePool2Alert = async() => {
        if(pool2Staking && (!fixStake2Error || !fixStake2E)) {
            await sleep(10000);
            successAlert();
        }
        if(fixStake2Error || fixStake2E) {
            errorAlert();
        }
    };
    useEffect(() => {
        fixStakePool2Alert();
    }, [pool2Staking, fixStake2Error, fixStake2E]);

    const fixStakePool3Alert = async() => {
        if(pool3Staking && (!fixStake3Error || !fixStake3E)) {
            await sleep(10000);
            successAlert();
        }
        if(fixStake3Error || fixStake3E) {
            errorAlert();
        }
    };
    useEffect(() => {
        fixStakePool3Alert();
    }, [pool3Staking, fixStake3Error, fixStake3E]);

    // flexible pool promises & use-effect
    const flexStakePool1Alert = async() => {
        if(flexPool1Staking && (!flexStake1E || !flexStake1Error)) {
            await sleep(10000);
            successAlert();
        }
        if(flexStake1E || flexStake1Error) {
            errorAlert();
        }
    };
    useEffect(() => {
        flexStakePool1Alert();
    }, [flexPool1Staking, flexStake1Error]);

    const flexStakePool2Alert = async() => {
        if(flexPool2Staking && (!flexStake2E || !flexStake2Error)) {
            await sleep(10000);
            successAlert();
        }
        if(flexStake2E || flexStake2Error) {
            errorAlert();
        }
    };
    useEffect(() => {
        flexStakePool2Alert();
    }, [flexPool2Staking, flexStake2Error]);

    const flexStakePool3Alert = async() => {
        if(flexPool3Staking && (!flexStake3E || !flexStake3Error)) {
            await sleep(10000);
            successAlert();
        }
        if(flexStake3E || flexStake3Error) {
            errorAlert();
        }
    };
    useEffect(() => {
        flexStakePool3Alert();
    }, [flexPool3Staking, flexStake3Error]);

    // fixed claims promises & use-effect
    const fixClaimPool1Alert = async() => {
        if(fixPool1Claim && (!fixPool1ClaimError || !fixClaim1E)) {
            await sleep(10000);
            successAlert();
        }
        if(fixPool1ClaimError || fixClaim1E) {
            errorAlert();
        }
    };
    useEffect(() => {
        fixClaimPool1Alert();
    }, [fixPool1Claim, fixPool1ClaimError]);

    const fixClaimPool2Alert = async() => {
        if(fixPool2Claim && (!fixPool2ClaimError || !fixClaim2E)) {
            await sleep(10000);
            successAlert();
        }
        if(fixPool2ClaimError || fixClaim2E) {
            errorAlert();
        }
    };
    useEffect(() => {
        fixClaimPool2Alert();
    }, [fixPool2Claim, fixPool2ClaimError]);

    const fixClaimPool3Alert = async() => {
        if(fixPool3Claim && (!fixPool3ClaimError || !fixClaim3E)) {
            await sleep(10000);
            successAlert();
        }
        if(fixPool3ClaimError || fixClaim3E) {
            errorAlert();
        }
    };
    useEffect(() => {
        fixClaimPool3Alert();
    }, [fixPool3Claim, fixPool3ClaimError]);

    // flexible claim pools promises & use-effect
    const flexClaimPool1Alert = async() => {
        if(flexPool1Claim && (!flexClaim1E || !flexPool1ClaimError)) {
            await sleep(10000);
            successAlert();
        }
        if((flexClaim1E || flexPool1ClaimError)) {
            errorAlert();
        }
    };
    useEffect(() => {
        flexClaimPool1Alert();
    }, [flexPool1Claim, flexPool1ClaimError]);

    const flexClaimPool2Alert = async() => {
        if(flexPool2Claim && (!flexClaim2E && !flexPool2ClaimError)) {
            await sleep(10000);
            successAlert();
        }
        if((flexClaim2E && flexPool2ClaimError)) {
            errorAlert();
        }
    };
    useEffect(() => {
        flexClaimPool2Alert();
    }, [flexPool2Claim, flexPool2ClaimError]);

    const flexClaimPool3Alert = async() => {
        if(flexPool3Claim && (!flexClaim3E && !flexPool3ClaimError)) {
            await sleep(10000);
            successAlert();
        }
        if(flexClaim1E && flexPool1ClaimError) {
            errorAlert();
        }
    };
    useEffect(() => {
        flexClaimPool1Alert();
    }, [flexPool3Claim, flexPool3ClaimError]);

    // use-state & functions to export
    return (
        <StakeContext.Provider value={ {fixStakes: { fixStake1, fixStake2, fixStake3 }, flexStakes: { flexPool1, flexPool2, flexPool3 }, fixClaims: { fixClaim1, fixClaim2, fixClaim3 }, flexClaims: { flexClaim1, flexClaim2, flexClaim3 }} }>
            { props.children }
            <ToastContainer />
        </StakeContext.Provider>
    );
}

export default StakingState;
