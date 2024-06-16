import CookieBanner from "@/components/Web/CookieBanner";
import Footer from "@/components/Web/Footer";
import Header from "@/components/Web/Header";
import { Outlet } from "react-router-dom";
// import {dm_sans} from "next/font/google"

const WebLayout = () => {
  return (
    <div className="font-primary">
      <CookieBanner />
      <div className="pb-[70px]">
        <Header />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default WebLayout;
