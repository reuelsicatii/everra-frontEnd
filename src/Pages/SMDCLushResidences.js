import React from 'react'
import Header from './Components/Header';
import LushBanner from './Components/LushBanner';
import LushAbout from './Components/LushAbout';
import LushLocation from './Components/LushLocation';
import LushAmenities from './Components/LushAmenities';
import LushFloorLayout from './Components/LushFloorLayout';
import LushUnits from './Components/LushUnits';
import PrincipalBroker from './Components/PrincipalBroker';
import Footer from './Components/Footer';

function LushResidences() {
  return (
    <div>
      <Header />
      <LushBanner />
      <LushAbout />
      <LushAmenities />
      <LushFloorLayout />
      <LushLocation />
      <LushUnits />
      <PrincipalBroker />
      <Footer />
    </div>
  )
}

export default LushResidences