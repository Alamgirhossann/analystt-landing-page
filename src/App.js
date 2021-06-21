import React from 'react';
import BrandDetail from './Components/BrandDetail/BrandDetail';
import BrandName from './Components/BrandName/BrandName';
import Charges from './Components/Charges/Charges';
import CompanyDetail from './Components/CompanyDetail/CompanyDetail';
import ComparablesAndPeers from './Components/ComparablesAndPeers/ComparablesAndPeers';
import Competitors from './Components/Competitors/Competitors';
import Compliance from './Components/Compliance/Compliance';
import CreditRating from './Components/CreditRating/CreditRating';
import Directors from './Components/Directors/Directors';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import ProsAndCons from './Components/ProsAndCons/ProsAndCons';
import RevenueDetail from './Components/RevenueDetail/RevenueDetail';
import RevenueStatement from './Components/RevenueStatement/RevenueStatement';
import Subcidiaries from './Components/Subcidiaries/Subcidiaries';
import TeamDetail from './Components/TeamDetail/TeamDetail';

const App = () => {
  return (
    <div>
      <BrandName />
      <div style={{ marginTop: "4px", marginBottom: "4px" }}>
        <BrandDetail />
      </div>
      <Navbar />
      <div style={{ marginTop: "15px", marginBottom: "10px" }}>
        <CompanyDetail />
      </div>
      <div style={{height:"300px", overflowY:"scroll"}}>
        <Directors/>
      </div>
      <div style={{ marginTop: "15px", marginBottom: "10px" }}>
        <RevenueDetail/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"350px", overflowY:"scroll" }}>
        <RevenueStatement/>
      </div>
      <div>
        <ProsAndCons/>
      </div>
      <div style={{ marginTop: "15px", marginBottom: "10px" }}>
        <TeamDetail/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"350px", overflowY:"scroll" }}>
        <ComparablesAndPeers/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"400px", overflowY:"scroll" }}>
        <Charges/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"400px", overflowY:"scroll" }}>
        <Compliance/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"360px", overflowY:"scroll" }}>
        <CreditRating/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"350px", overflowY:"scroll" }}>
        <News/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"300px", overflowY:"scroll" }}>
        <Competitors/>
      </div>
      <div style={{ marginTop: "25px", marginBottom: "10px", height:"400px", overflowY:"scroll" }}>
        <Subcidiaries/>
      </div>
    </div>
  );
};

export default App;