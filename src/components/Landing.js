import React from "react";
import BodySection from "./BodySection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
function Landing() {
  return (
    <div className="px-6 sm:px-10 bg-[#208458]">
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
