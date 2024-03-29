"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";
import { registrationBegin } from "@/constants";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <div>Completed</div>;
  } else {
    return (
      <div className="text-[10rem]">
        <table>
          <tr>
            <td className="w-32 text-center text-7xl">
              {days >= 10 ? "" : "0"}
              {days}
            </td>
            <td className="w-32 text-center text-7xl">
              {hours >= 10 ? "" : "0"}
              {hours}
            </td>
            <td className="w-32 text-center text-7xl">
              {minutes >= 10 ? "" : "0"}
              {minutes}
            </td>
            <td className="w-32 text-center text-7xl">
              {seconds >= 10 ? "" : "0"}
              {seconds}
            </td>
          </tr>
          <tr className="text-center text-lg font-semibold">
            <td>Days</td>
            <td>Hours</td>
            <td>Minutes</td>
            <td>Seconds</td>
          </tr>
        </table>
      </div>
    );
  }
};

const CountdownBox = () => {
  return (
    <Countdown
      key={5}
      date={`${registrationBegin.year}-${registrationBegin.month}-${registrationBegin.date}T12:00:00`}
      renderer={renderer}
    />
  );
};

export default CountdownBox;
