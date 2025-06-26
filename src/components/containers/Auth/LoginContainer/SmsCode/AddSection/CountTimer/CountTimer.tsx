//base
import { FC } from "react";

//lib
import Countdown from "react-countdown";

export interface IPropTypes {
  setShowTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountTimer: FC<IPropTypes> = ({ setShowTimer }) => {
  let totalTime = 2 * 60 * 1000;
  let passedTime = 0;

  return (
    <Countdown
      autoStart
      date={Date.now() + 2 * 60 * 1000}
      renderer={({ seconds, minutes, completed }) => {
        if (completed) {
          setShowTimer(false);
        } else {
          passedTime++;
          const PercentTimer =
            ((totalTime - passedTime * 1000) / totalTime) * 100;

          return (
            <section
              className="text-[13px] text-center text-white border border-[#17803D]  
                rounded-lg shadow-lg font-bold cursor-not-allowed w-full hover:text-white 
                  hover:bg-[#3ba160] transition-all"
              style={{
                background: `linear-gradient(to right, #17803D ${PercentTimer}%, #3ba160 ${PercentTimer}%)`,
              }}
            >
              <strong className="text-white text-[18px] ">
                {minutes}:{seconds}
              </strong>
            </section>
          );
        }
      }}
    />
  );
};

export { CountTimer };
