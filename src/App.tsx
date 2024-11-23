import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages";
import WebLayout from "./layouts/WebLayout";
import Solutions from "./pages/solutions";
import HowItWorks from "./pages/how-it-works";
import Faq from "./pages/faq";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from "./pages/terms-of-use";
import CookieNotice from "./pages/cookie-policy";
import EngagementHub from "./pages/pricing/EngagementHub";
import Ourservice from "./pages/solutions/Ourservice";
import PropertyDetails from "./pages/propertyDetails";
import AboutUs from "./pages/AboutUs";
import Properties from "./pages/properties";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions/*" element={<Solutions />} />
        <Route path="/how-it-works/*" element={<HowItWorks />} />
        <Route path="/pricing/*" element={<EngagementHub />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookieNotice />} />
        <Route path="/our-service" element={<Ourservice />} />
        <Route path="/property-detail/:id" element={<PropertyDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/properties" element={<Properties />} />
      </Route>
    </Routes>
  );
}

export default App;
