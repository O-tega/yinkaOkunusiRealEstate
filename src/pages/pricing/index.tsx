import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ResearchHub from "./ResearchHub";
import Custom from "./Custom";
import EngagementHub from "./EngagementHub";

function Pricing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research-hub" element={<ResearchHub />} />
      <Route path="/engagement-hub" element={<EngagementHub />} />
      <Route path="/custom" element={<Custom />} />
    </Routes>
  );
}

export default Pricing;
