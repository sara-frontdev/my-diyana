// componnets

import SliderContainer from "./SliderContainer/SliderContainer";
import WelcomeBanner from "./WelcomeBanner/WelcomeBanner";
import UserToolbar from "./UserToolbar/UserToolbar ";
import Navbar from "./Navbar/Navbar";

const HeaderWithSlider = () => {
  return (
    <header>
      <div className="relative z-10 2xl:w-[1400px] 2xl:mx-auto">
        <UserToolbar />

        <Navbar />

        <WelcomeBanner />

        <SliderContainer />
      </div>
    </header>
  );
};

export default HeaderWithSlider;
