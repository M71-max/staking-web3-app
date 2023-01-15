import { Link } from 'react-router-dom';

import './NavBar.css';

function StakeNavbar() {

    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand pl-5' to="/">
                    Staking 3.0 App
                </Link>

                <div className='d-flex flex-row-reverse'>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='navbar-nav'>
                        <Link className='navbar-item px-4 text-primary' to='/fixed-pool-stake'>Fixed Pools</Link>
                        </li>

                        <li className='navbar-nav'>
                        <Link className='navbar-item px-4 ' to='/flexible-pool-stake'>Flexible Pools</Link>
                        </li>

                        <li className='navbar-nav'>
                        <Link className='navbar-item px-4' to='/claim-stake'>Claim Staking</Link>
                        </li>
                        
                    </ul>
                </div>
                </div>


            </div>
        </nav>

    );

}

export default StakeNavbar;
