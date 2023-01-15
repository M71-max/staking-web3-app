import React from "react";
import image from '../../images/Background1.png';

import './Home.css';

function Home() {
    
    return (
        <div className="home-page" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center", position: "fixed",
        height:'100%',width:'100%'
        }}>

            <div className="container staking-info">
                <div className="container row pt-5">
                    <h1 className="fw-bolder text-primary">WEB 3.0 STAKING APP</h1>
                    
                    <div className="container row pt-2">
                        <p className="text-warning">Welcome to the world of staking in the BlockChain!</p>
                    </div>
                </div>

                <div className="container row staking-details">
                    <h5 className="text-info">You may stake your amount in either Fixed or Flexible Pools, As you may wish.</h5>

                    <h4 className="row fixed-pool pt-4 fw-bolder">Fixed Pools</h4>
                    <p className="fst-italic text-secondary">You may stake in any of the three fixed pools as you wish and have a fixed reward</p>

                    <h4 className="row fixed-pool pt-4 fw-bolder">Flexible Pools</h4>
                    <p className="fst-italic text-secondary">You may stake in any of the three Flexible pools as you wish and have a Flexible reward</p>
                
                </div>

            </div>
        </div>
    );

}

export default Home;
