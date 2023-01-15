import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Claim from './pages/claim/Claim';
import Home from './pages/home/Home';
import NotFound from './pages/pageNotFound/PageNotFound';
import FixedPools from './pages/fixedPools/FixedPools';
import FlexiblePools from './pages/flexiblePools/FlexiblePools';
import TokenState from './contextComponents/tokensContext/TokenState';
import StakeNavbar from './components/NavBar';
import StakingState from './contextComponents/stakeContext/StakeState';

import './App.css';

function App() {

    return (
      <StakingState>
      <TokenState>
      
      <Router>
        <StakeNavbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fixed-pool-stake' element={<FixedPools />} />
          <Route path='/flexible-pool-stake' element={<FlexiblePools />} />
          <Route path='/claim-stake' element={<Claim />} />

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
      
      </TokenState>
      </StakingState>
      
    );
  
}

export default App;
