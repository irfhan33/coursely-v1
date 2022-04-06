import React from "react";
import BodySection from "./BodySection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
function Landing() {
  return (
    <div className="px-[26px] sm:px-[40px] bg-[#208458]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Body Section */}
      <BodySection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
