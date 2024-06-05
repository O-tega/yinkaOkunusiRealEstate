import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ResearchHub from "./ResearchHub";
import CRM from "./CRM";
import Custom from "./Custom";

function Pricing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research-hub" element={<ResearchHub />} />
      <Route path="/customer-research-model" element={<CRM />} />
      <Route path="/custom" element={<Custom />} />
    </Routes>
  );
}

export default Pricing;
