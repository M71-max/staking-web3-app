import React, { useContext } from "react";
import { useAccount, useDisconnect, useConnect } from 'wagmi';

import image from "../../images/images.jpeg";
import StakeContext from "../../contextComponents/stakeContext/StakeContext";
import '../fixedPools/FixedPool.css';

function Claim () {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    // fix stake claim context hook
    const fixClaimPoolTrans = useContext(StakeContext);
    const fixClaimPool1 = async() => {
        try {
            await fixClaimPoolTrans.fixClaims.fixClaim1();
        } catch (e) {
            console.log(e);
        }
    }

    const fixClaimPool2 = async() => {
        try {
            await fixClaimPoolTrans.fixClaims.fixClaim2();
        } catch (e) {
            console.log(e);
        }
    }

    const fixClaimPool3 = async() => {
        try {
            await fixClaimPoolTrans.fixClaims.fixClaim3();
        } catch (e) {
            console.log(e);
        }
    }

    // flexible stake claim useContext hook
    const flexClaimPool1 = async() => {
        try {
            await fixClaimPoolTrans.flexClaims.flexClaim1();
        } catch (e) {
            console.log(e);
        }
    }

    const flexClaimPool2 = async() => {
        try {
            await fixClaimPoolTrans.flexClaims.flexClaim2();
        } catch (e) {
            console.log(e);
        }
    }

    const flexClaimPool3 = async() => {
        try {
            await fixClaimPoolTrans.flexClaims.flexClaim3();
        } catch (e) {
            console.log(e);
        }
    }

    if(isConnected) {
        return (
            <div className="fixed-staking" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center", position: "fixed",
            height:'100%',width:'100%'
            }}>

            <div className="container right-display user-info">
            <p className="pt-5 pl-4">Signing in as {address}</p>
            <button className="btn1" onClick={() => disconnect()}>Disconnect</button>
            </div>

            <h1 className="fw-bolder py-4 mx-5 fix-pool">Welcome Claim Your Staking Here!</h1>

            <div className="pools container row px-5 ">
                <div className="container pool-1 bg-secondary text-white pt-5">
                    <h3 className="fw-bolder ">Welcome to for the Fixed Pools Staking</h3>

                    <p className="fw-lighter">The staking type where the reward is fixed and the most reliable investment!</p>

                    <div className="stake py-5">
                        <button className="btn mx-3" onClick={fixClaimPool1}>Claim My Bloom Stake</button>
                        <button className="btn mx-3" onClick={fixClaimPool2}>Claim My Thunder Stake</button>
                        <button className="btn mx-3" onClick={fixClaimPool3}>Claim My Storm Stake</button>
                        
                    </div>

                </div>

                <div className="px-4 py-4"></div>
                <div className="container pool-1 bg-warning text-white pt-5">
                    <h3 className="fw-bolder ">Welcome to for the flexible Pools Staking</h3>

                    <p className="fw-lighter">Offers greater rewards on greater investments and for greater time!</p>

                    <div className="stake py-5">
                        <button className="btn mx-3" onClick={flexClaimPool1}>Claim My Bronze Stake</button>
                        <button className="btn mx-3" onClick={flexClaimPool2}>Claim My Gold Stake</button>
                        <button className="btn mx-3" onClick={flexClaimPool3}>Claim My Platinum Stake</button>

                    </div>
                </div>
                <div className="py-5"></div>
            </div>

            </div>
        );
    }
    else {
        return (
            <div className="container log-in">
                <h4 className="row fixed-pool pt-5 fw-bolder">Claim Staking Rewards</h4>
                <p className="fst-italic">Hey there I see you want to claim your rewards. But first must identify yourself must sign-in!</p>

                <div className="image">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUSExAVExIWFRUSFRcXGRUYFxcXFRYWFhUVFRUYHiggGBolGxUWITEhJSkrLi8uFyAzODMtNygtLisBCgoKDg0OGxAQGyslICUtLS0tLS8vLS0tLS0tLS0tLS0tLjctLS0vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIEBgcFAwj/xABQEAABAwIDAwcFCwcLAwUAAAABAAIDBBEFEiEGMUEHE1FhcYGRIpKhsdEUFhcyQlVWc6Ky8BU0YnLB0tMjQ0RFUlNUgpPU8TO0wiQmNYOj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QANhEAAgECBAIIBQQBBQEAAAAAAAECAxESITFRBEETImFxgZGh0QUUUrHhMkLB8GIlcpLi8SP/2gAMAwEAAhEDEQA/AO4oiglASirc9CsgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAquVkQFc4Ro0VkQBERAEREAREQBERAERQSgJRVselSCgJREQBF85HhoJJAAFyToABxJ4LTcX5UMLgJAnM7hwgbnHdJoz7SmMXLJIhtLU3ZFyCs5cohpFQud9ZK1h8Gtf61jfDLWO+JhjSP1pXepgVvQVNvsc9JHc7Qi4ueWarbq/DWgdb5G+ksKy6HlxhP/Vont+qkZJ6HBijoKm32HSR3OuotOwblLwuoIaKjmXm3kzAx7+Gc+QT1By28G+o1CrcWsmdJ30LIiKCQiKHGyAlFAN1UuN9yAuiKrigLIqZOsqQeBQFkREAREQBERAEREBBKrr1disQq3PQhBYG6lQBZShIREQBQQpRAVBPQpAUogCIiA4htjU1GKYscM90CCmY7KATo4saHOcW3HOPvfK0mwAv0recF5LsMgAzQe6H8XTnOD/8AXoweauX4ps8+vxusgjlEUgfJM1zgSLx5LC41bv8AjC9rbl7bMT2nw/yXwmribYAlpqBbpD4iJe961yTwqMXbLTQpTzbaOw0mHwxC0UMcY6GNa0eACylx2HluLDlqMPLHDflksfMewEeKz2ct9FxpKnu5k/8AmFS6FTY76SO51NYNbhNNMLS08UoO8PYx33gucv5b6PhSVHeYR6nlefLy1SSHJTYdndwvIXn/AE42ftRUKmwxx3NpxvkpwycHJEaZ/B0Js3viN2W7AD1rUOTvEaigxQ4Q+cTwFz2NsSWsc2IygsBJyaAtczcHdhufUbT4iMoYaOF2hNjTi3WXXm81ePspghotoKemdIJCwuJeAQCX0kjzYEndmtfjbgrYp4WpO+V9zhtXVkfoJFUOBUkrKXEqhNjqnODpUhwKAhu8ngh3j8cFdUO8fjggLqjxx6FdEBUOHSobqb8NynKOhWQBERAEREAREQBERAEREAREQBERAEREAREQBERAcX2cnYzaapzuDcxmY25tmcRGQ0dZAOnUuyuG7puvz9iGzZxDG62nEoidmlka4tzC7ObsCLjQ5t/BeyyPafDtADVxNGn9IHde03duWmpBStmr2RVF2vkdmlha4Wc0OHQQD61gybP0bvjUdOe2KM+sLlY5Y6yGwqsMDTx8qWH7MjHetZcXLnTnfRSDskYfWAuOgqbHWOJ0qLAaNvxaSBvZFGPUFnRRNaLNaGjoAAHoXJpuXOAfFonk/pSsb6gVjfC9XTi1LhYJ4Ec9P6I2N9ajoKnNDHE7G/8AaFxYTsftW1zHBzQ8tuDcZmULmuFxxBBB6wVaSg2mxHyZXGlhda4JEDbcRlZeU9jtF5Gy2Be4doaek5znDGTd2XKCX0b3mzbmwGa2/grIQUVLNXszlu7WXM76DqdOj1JITbcrBqOFwsxaWVBvPYEJOmoUgcUILKh3j8cFdUO8fjghJdERAEREAUXRxsqc30oD6Kt+pWVRdASCpUAKUAREQBEWk4zX1FTUOpKZ3NsYDzj7kE2sHajUAE2sN56lVVqqmtLt6Lc08Nw0q8mk0kldt6Jf3kbJXYzTw/HnY0j5N7u81tz6F5Mu3FI3Qc47saP/ACIU4fsXTRjyw6Z3S8kNv1Nbw7br2Y8Lp27qeJvYxvsVS+Ylrhj6v+DT/p9P65+UV4KzfmeF7/aX+7m8I/31kU22NG7QyOYf0mu9YuB4r2jRRHfEzzW+xYdTgFI/41NH2tGU+LbFMPEfVF+DX8jpPh8tac490k/ujNp6ljxmY9r29LSHD0LztqscZRUstU8ZhGBZu7M9xDWNvwu4jXgLleJXbJGImWjkex41yk7+prv2OuCtY5Qca90YNLmFpY5YWv4A+WLOtwvY6dIKsoVHKpGnUVm9s097FXEcLBUnWoTxRWqatKN9Lrmnui+F4dtBXxiqdiLaNkgD4omM3MOrTYagEai7nGx1tuWb7y8d+fj5h9q3Onp3SULY2SGJ76ZrGyNFywujADwOkHXuWj/B3iv0in8J/wCOtsZ35peH4Z57Xf5n195eO/Px8w+1PeZjvz8fMPtXy+DrFfpFUeE/8dPg6xX6RVHhP/HXWJfVHyfsRbsfn+TCp+S/E2TuqWYs1s775pBG7M7Na99ba2HgvS95mO/Px8w+1fL4OsV+kVR4T/x0+DrFfpFUeE/8dMd9ZR8vwLdj8/yfU7GY58/H/TPtXwfsBjB34y09sIKt8HWK/SKo8J/46fB1iv0iqPCf+Oouvqj/AMf+o8H5/khuwOMDdjLR2QgepY1bi2L4PJHJWVDa2hkeI3uy2fGTc3GlwbAkAlwOUjySQsr4OsV+kVR4T/x1j13JXXTM5ubHJZWXByyMle243HK6ci6lOP7nFru/Ad+SfmdVa8EAg6HUHqO5cbqD/wC7Wdo/7ByyJ6rE8Elg901fuzD5HiJznAh0Z36ZiXAhoJAzEENcLA2K2avwnDI8RGJSVJFQ1tsgcHNzc2YsxY1pcDkNrXtxsqsUaSbk1Zpq5ZGnOrJRhFt7JNm8AqVrQ2zowT5b7fqFZlNtFSyaMnbfgHXYe4OtdZY16UnaMk/FGmfBcTCOKVOSXameq5wuNVcFLBVG89gVxmLqh3j8cFdUO8fjggLooKi56PSgLKrnKLHp8FIaAgIa3id/qV0RAEREAREQBERAFzFtXUQ1tTJCwvyvk5xtibs5w8Brv4jd2XXTlzSDGfc1fUPLS5jpJGPtqQDISCOu43LDxrSwNu2eu2X98D2vg8W1WUYqTw/pfPPT+8zZsP2xpZB5bjE7od8XueNLdtl7MOIwu+LNG7se0+orymx4dWagRPcd9vIk77WcseXYWkPypW9jmkfaaV2pV7XWGS3090U1KfAuTUsdN7NKVvszY3TsG97R3hYU+N00fxqiPsDg4+a25Xje8Kl/vJvGP9xZFPsZSN3te/8AWcfU2wU4+If7Yrxb/g56H4fHN1Zy7opfdmBX7Xl55ujidJIdA4jd1tbvPa6wHWufbSXGFVoO8TUwPbndfVdqpKOOMWjY1g6GgC/bbeub8quDR0+FzlhcecnhccxGln6AWG7yiuqNGr8xTqTlez7ksuXPz7DqpxnDLhatGlBxula+bbTvm+Vlol2nRcF/N4fqo/uBZqwsF/N4fqo/uBZq0HlhERAEREARF5+J4vTUzQ6oqI4WnQGR7W36hc6nsQHoIta9/wBhXzhB5ye/7CvnCDzl1hlsyLo1rl7NsNaeipjP/wCcq9vDNh6drWmQuldYG18rd3AN19K8vbHFsGxGn9zy4lGxudsl2Pbmu0EW8oEbnFeviGPU08H/AKapbIA4AmN19ADoSO5ZePlSp0OkqxvhxNJ87pZLdu2xs4GpXU3CjJxxWu12X8eb0PT97FFa3uZnpv43uvNr9iKZ48jNEeolze8O18CFGL4mHMhySnMLF9iRqAN/TxWyU1Ux4uxwcOrh2jgs8J8NxFSVPCna22d1fK2eXMv6fjOHiqiqSzb5vlvfLPXM0NtRW4c4B/8AK05IA1cW9jXHVjurdv371umFYhHOwSRuu06EcWkb2uHA6rJqadkjSx7Q5jhYg7iFoTA7DKu1yaaTp/s33n9JhPeD1qetwrWd4dv7fHY0LB8Ri8kqyV8slPfL6vvzy06Ivm52o0KuEst54pXP1FM/UVdEIKZ+opn6irogKZ+opn6irogCIiEhERAEREAXOaDEIoq+pbMAY5HSMNxdo/lLjMOhdGXOaGCnkrqqKcCz3SBhJt5YkOjXcDbx3LHxd7ww2vfnpo/voev8LwYK2NO2HO2uuq7tT3KrZCkmGeJxYDqCxwcw9gN9OwhY0ezs8Fn/AJRc2JhD35i5rQxurs13ZbWB36KH7HzRkupat8f6LiW+LmaHvatY5XZquLDI4pZQ58lTleW/KY1j3tY42F/Ka07uASjw8alRRlTwvdPL0a+x3X4yrTpXp8Qpx2kutp/kn3XTMnF+VnNIYMNpH1UmoDyH5ejM2NozubficoWM2Haup1MkVG0/J/km9+jZHjvK3Tk/paFlFEaLKY3NBc8WzvfYZjKd+cHQg7t2gWzr0XOKdox8837HhKL5s5N7x9oHauxqx6GyT29Ab6lru32z2MU9G51ViDaimzMDm53udmLvINnM4H9Jd7Wg8t//AMVJ9ZD98LunUk5pZa7IiUEkzcMD/NoPqY/uBZywMC/NoPqYvuNWes5YEREAREQHg7bbQNoaOWpIDnNAbG07nSONmg9XE9QK5/gmxsUjG4hi73z1EwD2RFzmhrT5TQQ0g7j8W4a29rEr1OXmne7DmOaLtjqI3PHUWSRi/wDme0d62Ksq2OdTVbRngLGuaRqLOBLT9oH/ACqrjK0qHD9JDJt2u+Suld9ivd92xbw1ONWrhltpu9u9nm0OzWDSuye4I2u4Bzd/Yb716nwf4V/gIfA+1KuqbPPDzVyWm7nWI0uD6LHxWzKnguJnVUuviSdlJZJ5J7tZPJ2yyO+Joxg4tRtdXs82v/dTWfg/wr/AQ+B9q0fY3CII8cxClZHanbG17WAusDaF2mt9DK/xXXlyTC6d79osRayQxu5phuCRpkptNO0eC1VW3SmmsWWmWea3y8ymmuvFp2z12yex0n8hU3919p/tXkugEFVGIibOsHNuTYOOvdx7lkfkeq/xbvFyxKKF0NS0S+WXfFdcnV2gOvHh3rwa6inTtQ6Prx63Vyz/AMbvPTPLM9Sk28X/ANcfVfVzzy7f4zNrWubb0HO0rja7oiJB2DR/2ST3BbGsDG/zaf6mX7jl7daKlTlF80YeEqOnXhOOqaMDYyr5ykjJNyy8R/yGzfs5V7pK1Xk4/Nn/AFzvuRraHcB3rjhpOVGLeyLfiVNU+LqRWmJ+uZIPaoAvrcq6oW9BsrzES0+xWVQLI51kBZFUHuVkAREQBERAEREAXNqbCI6mtq43vLHB0jmEW3iQg3B3jXcukrmTMLknrarmpObljfI9p1FzzhFsw1G/oKxcYr4Fa+em+R7PwiWFVZY8NorrbZ++vYes2kxWn+I8VDBuBN9OxxDh2BxWpcstTO/Dad88fNy+6XDKBvAhlsbEkjsutubtBXwaVFKZAPltBHeXNBafQtR5ZsVbUYbTzNY5o90nR1t7YZToRvCs4GUOnUYyl/tf5z9bHHxKFboXOcINfXC2eutnbPu5H1HJzVQZarCMQLBI1r8jnaOBFxZ4BbINdA9vevqNqto6bSowwVAHyo2EuPXeFzh9kLDpMLx3CQPcuWuoz5YjtmLQbE2iuHsO/RhcOJFys6n5Z2RnJV4fPDJ0NLSfNlyEL07SlolL7niZdxHwsVo0dgcwP60w9BgWubfbc1lZRvhkwuSmiLmOMrudIBa67Rd0bW6nTet4j5Y8LIuefb1GMH7riFqfKVyj0VbROpoGzZ3OY/M5rGtsx1zfys1+5TTj1l1LeYlJWeZ2HAvzaD6mL7jVnrAwL82g+pi+41Z6yFoREQBERAYWK4fHURPglbmjkaWOHUeg8DxB4ELmFPQ4zhGaKCEYjQXJY3+cYCb2sNQSTrYOad9mkkLriLuM7Zaohq5y2PlCxBujdm6hv+sPVTr6fCPiX0dqfGb/AG66ciYo/SvX3Is9/scx+EfEvo7U+M3+3Xn7KGsbXVOJ1FG6n59ojbG+4t/0+JaDuiG8C9zoto5WNoKiiohNTuDZDMxly0O8nK9xFjprkA7Ce1bDi9I6aFoaQHXa7jbcb+tUca6vy8nRVpNZWzeVnbO6z7i7hlDpUqua5nnv2jlbYup7A7rlwv2XGqmjp5pp2zSsyNZ8UG43aiwOu/W6ysVwt0jImtI8iwN77rAXHgvaXm0+FrVKrVecnGOFr9KTeudlonyyT53sa516UYJ0opSd09bpaeoXgbaVnN0jxexktEP89832Q5e1LKGgucQGgEknQADeSVz+qldiVW1jLinj47vJv5TuousAP+Vs4uo4wwx/VLJePsdfDKCqVeknlCHWk+7NLx2Nk2MpDHSM0sXkydzvi/ZDV72vQPFfGJuUAN3bg3oA0FuhZKvpwUIqK5ZGOvWdarKo9W2/N3KtddWVGbz2q67KgqfK7lYqjd47AgJk4dquqP4dqlm7x9aEFkREJCIiAIiIAtOxvBp4p/ddIbvOsjP7W4mw+UDa5G++o6txRV1aUais+9Nap9ho4biZ0JYo2aas0801szT6Pbdl8lRC+J40Nhcd4NnDssV8NrI6HE6Y03ulrJMzXxOIILZBcN8lwFwQ4tI6HdK26qpI5B5cbHj9Jod615o2Yo8weIAHAhwsXgXGo8m9vQqo/MweUk++6fpkaJT4CoruE4vsakvWzt4nNKDa7FMIDafEKR01OyzGTNO5o0AbL8V43WDsrulbVR8p+DztAklLL/JmjdbvcA5npW8uaCLEXB3grXcQ2FwyYkvoYbneWN5tx6y6OxutzlCX6l5ex5lpLRnmuxLZx+rn4aT+kKe/2hdaryoYphL8PfFRyUplL4yGwiO5AcM2rB0LZ38k+EH+jvHZNP8AtevtByW4Q3+iF360s7vQX2UxlTTum8v7uGna2RsOzVQ2Skp3scHNdDEQR+oF6a5fFybV1OXNocYlhgJLhG5pOW+p1DspPWGjruvo7YzGx/XzvMPtXOCPKS9SbvY6Yi5oNisc+fneYfaoOxmOD+vneYfamCP1L19hd7HTEXNPeVjnz87zD+8nvLxz5+d5h9qYI/UvX2F3sdLRc0OxeOfPzvMP7yhuxmOH+vnW/UPtTBH6l6+wu9jpiLmh2Kxz5+d5h9qhuxmNn+vneYf3kwR+pevsLvYry+TN/J8cd/LfUNyjiQ2OTMbdAuPEdK2rC9rKV4DXPMbgACHiw0H9rd6Vr+Ccm7hUNq6+tfXSx2MbXAhjSNQSHON7HUAWF9bFbPW7KUkmpiyHpYcv2R5PoVPEOpaKpNO173vne2ndb1NfCfLdb5jFnazjbK173XNPLusZ35Ypv8TD/qM9q86t2tpIv5znHdEYzfa+L6Vie8Kl/vJvOZ+4syi2So49eaznpkOb7PxfQszfEvK0V23bNmD4bDNynLsSS83t3GszVFZiLsrG83Tg67w3Q73O/nCP7I03dq3DBcLjp4+bjaelzja7j0n2cF6DWWADQABoB0dllLr/APH7V3R4dQeOTxS39tijiuOdaKpQioQWkV92+b7wDb5JU5+ooM3UnldXpWgwEtG9WUNvxUoSF8yOq49S+iqb8EBRo6B3lXsoYCNFdAEREBF1KrqpAQEoiIAiIgCIiAIiIAiIgCo4ajsKuoc26AqbjrVXN0udSpdfTS+qnLff4IQSb9SWPUrIhJR17G9tykDoVlSxG7d0exCANexI+PaoYDa25XAsgK5u1WBVGm2llZoQBzrIHKHbwU3kW4ISXVI+np1Qt6/UroQFR28HuV1BF0JJVS5LHpVQ62hQguCpVGj13V0JKuPpTL1lHC6ix6fUgLoiIAiIgCIiAIiIAiIgCIiAIiICub8WKZvxYqEQFgVKIgCIiAIiIAiIgCIiAIiICucKM4/F0RDm4zD8XVgURCUSiIhIVXOsiICMvXqoz9ahEIP/2Q==" />
                </div>
                <div className="row pt-4 note">
                    <h1>Looking for Information!</h1>
                </div>

                <button className="connect-button" onClick={() => { connect({ connector: connectors[1] }) }}>Metamask</button>
                <button className="connect-button" onClick={() => { connect({ connector: connectors[0] }) }}>Coin Base</button>

                <h2 className="note pt-5 pl-5 fw-bolder">Connect the Wallet</h2>
            </div>
        );
    }

}

export default Claim;
