
// Plugins and Assets
// ===============================================
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MessengerCustomerChat from 'react-messenger-customer-chat';

// Pages
// ===============================================
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ListingRent from './Pages/ListingRent';
import ListingSale from './Pages/ListingSale';
import SMDCLushResidences from './Pages/Project/LushResidences/SMDCLushResidences';
import NotFound from './Pages/NotFound';
import NotFoundDashboard from './Pages/NotFoundDashboard';


// Listing Rent
// ===============================================
import TheLerato from './Pages/ListingRent/TheLerato';
import TheResidencesAtGreenbelt from './Pages/ListingRent/TheResidencesAtGreenbelt';
import StFrancisShangrila from './Pages/ListingRent/StFrancisShangrila';
import EastonPlace from './Pages/ListingRent/EastonPlace';
import AsiaTower from './Pages/ListingRent/AsiaTower';
import KLMosaicTower from './Pages/ListingRent/KLMosaicTower';


// Listing Sale
// ===============================================

function App() {

  const defaultProps = {
    shouldShowDialog: false,
    htmlRef: undefined,
    minimized: undefined,
    themeColor: undefined,
    loggedInGreeting: undefined,
    loggedOutGreeting: undefined,
    greetingDialogDisplay: undefined,
    greetingDialogDelay: undefined,
    autoLogAppEvents: true,
    xfbml: true,
    version: '2.11',
    language: 'en_US',
    debug: false,
    onCustomerChatDialogShow: undefined,
    onCustomerChatDialogHide: undefined,
  };

  return (
    <div className="App">
      <Router>

        {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
        <Routes>

          {/* Protected Routes */}
          {/* ============================*/}
          {/* <Route path="/dashboard/listLead" element={<Protected cmp={DListLead} />} /> */}



          {/* Unprotected Routes - Dashboard Page*/}
          {/* ========================================*/}
          {/* <Route path='/dashboard/login' element={<DLogin />} /> */}


          {/* Unprotected Routes - Header Page*/}
          {/* ========================================*/}
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/listing-rent' element={<ListingRent />} />
          <Route path='/listing-sale' element={<ListingSale />} />
          
          {/* <Route path='/order/productform' element={<FormOrder />} />*/}
          {/*<Route path='/order/payment/:order_code' element={<PaymentOrder />} /> */}


          {/* Unprotected Routes - Listing Rent Page*/}
          {/* ========================================*/}
          <Route path='/listing-rent/the-lerato' element={<TheLerato />} />
          <Route path='/listing-rent/the-residences-at-greenbelt' element={<TheResidencesAtGreenbelt />} />
          <Route path='/listing-rent/st-francis-shangrila' element={<StFrancisShangrila />} />
          <Route path='/listing-rent/easton-place' element={<EastonPlace />} />
          <Route path='/listing-rent/asia-tower' element={<AsiaTower />} />
          <Route path='/listing-rent/kl-mosaic-tower' element={<KLMosaicTower />} />
          



          {/* Unprotected Routes - Listing Sale Page*/}
          {/* ========================================*/}


          {/* Unprotected Routes - Project Page*/}
          {/* ========================================*/}
          <Route path='/project/smdc-lushresidences' element={<SMDCLushResidences />} />



          {/* Unprotected and root Routes */}
          {/* ============================*/}
          <Route path='/' element={<Home />} />
          <Route path='/dashboard/*' element={<NotFoundDashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>


      <MessengerCustomerChat pageId="794030950692039" appId="803836814309013"
      />
    </div>
  );
}

export default App;
