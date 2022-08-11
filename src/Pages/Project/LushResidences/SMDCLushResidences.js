import React from 'react'
import Header from '../../../Pages/Components/Header';
import Footer from '../../../Pages/Components/Footer';
import PrincipalBroker from '../../../Pages/Components/PrincipalBroker';
import LushBanner from './Components/LushBanner';
import LushAbout from './Components/LushAbout';
import LushLocation from './Components/LushLocation';
import LushAmenities from './Components/LushAmenities';
import LushFloorLayout from './Components/LushFloorLayout';
import LushUnits from './Components/LushUnits';

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