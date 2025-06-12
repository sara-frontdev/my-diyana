// componnets

import SliderContainer from "./SliderContainer/SliderContainer";
import WelcomeBanner from "./WelcomeBanner/WelcomeBanner";
import UserToolbar from "./UserToolbar/UserToolbar ";
import Navbar from "./Navbar/Navbar";

const HeaderWithSlider = () => {
  return (
    <header>
      <div className="relative  custome2xl1:w-[1400px] custome2xl1:mx-auto">
        <UserToolbar />

        <Navbar />

        <WelcomeBanner />

        <SliderContainer />
      </div>
    </header>
  );
};

export default HeaderWithSlider;
