import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ListingCondominium from './Pages/ListingCondominium';
import SMDCLushResidences from './Pages/SMDCLushResidences';
import NotFound from './Pages/NotFound';
import NotFoundDashboard from './Pages/NotFoundDashboard';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  // const propTypes = {
  //   pageId: PropTypes.string.isRequired,
  //   appId: PropTypes.string.isRequired,

  //   shouldShowDialog: PropTypes.bool,
  //   htmlRef: PropTypes.string,
  //   minimized: PropTypes.bool,
  //   themeColor: PropTypes.string,
  //   loggedInGreeting: PropTypes.string,
  //   loggedOutGreeting: PropTypes.string,
  //   greetingDialogDisplay: PropTypes.oneOf(['show', 'hide', 'fade']),
  //   greetingDialogDelay: PropTypes.number,
  //   autoLogAppEvents: PropTypes.bool,
  //   xfbml: PropTypes.bool,
  //   version: PropTypes.string,
  //   language: PropTypes.string,
  //   debug: PropTypes.bool,
  //   onCustomerChatDialogShow: PropTypes.func,
  //   onCustomerChatDialogHide: PropTypes.func,
  // };

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
          {/* ============================*/}
          {/* <Route path='/dashboard/login' element={<DLogin />} /> */}


          {/* Unprotected Routes - Business Page*/}
          {/* ============================*/}
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/listing-condominium' element={<ListingCondominium />} />
          <Route path='/smdc-lushresidences' element={<SMDCLushResidences />} />
          {/* <Route path='/order/productform' element={<FormOrder />} />*/}
          {/*<Route path='/order/payment/:order_code' element={<PaymentOrder />} /> */}



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
