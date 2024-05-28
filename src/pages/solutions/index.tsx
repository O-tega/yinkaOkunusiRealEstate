import { Route, Routes } from "react-router-dom";
import BrandTracking from "./brand-tracking";
import CreativeTesting from "./creative-testing";
import CustomerEngagement from "./customer-engagement";
import CustomerFeedback from "./customer-feedback";
import CustomerProfiling from "./customer-profiling";
import EventFeedback from "./event-feedback";
import LeadAcquisition from "./lead-acquisition";
import MarketAnalysis from "./market-analysis";
import NewProduct from "./product-development";

function Solutions() {
  return (
    <Routes>
      <Route path="/brand-tracking" element={<BrandTracking />} />
      <Route path="/creative-testing" element={<CreativeTesting />} />
      <Route path="/customer-engagement" element={<CustomerEngagement />} />
      <Route path="/customer-feedback" element={<CustomerFeedback />} />
      <Route path="/customer-profiling" element={<CustomerProfiling />} />
      <Route path="/event-feedback" element={<EventFeedback />} />
      <Route path="/lead-acquisition" element={<LeadAcquisition />} />
      <Route path="/market-analysis" element={<MarketAnalysis />} />
      <Route path="/product-development" element={<NewProduct />} />
    </Routes>
  );
}

export default Solutions;
