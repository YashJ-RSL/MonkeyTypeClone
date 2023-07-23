import React from "react";
import { useLocation } from "react-router-dom";
import useFindNumErrors from "../hooks/useFindNumErrors";
import Header from "./header";
import { useNetWPM, useGrossWPM } from "../hooks/useWPM";
import useAccuracy from "../hooks/useAccuracy";
import useChart from "../hooks/useChart";
import { Line } from "react-chartjs-2";

const Results = ({
  userInputSentence,
  originalSentences,
  timeLimitMin,
  tracker,
}) => {
  // userInputSentence = "shine center may from notice fill number told body a";
  // originalSentences =
  //   "shine center may from notice fill number told body always dog but if on yet to in one made give both of vowel course thing like more possible tail heard and rest see system cut soon mile new will east check under pass bird did we between self final against run the heat walk foot learn that art real as hope know name came finish woman which type hair am sat river vary whole receive cloud least this metal green cool lead separate get method day red yellow provide lost drop side tree paper moon result still lay far able";
  // timeLimitMin = 0.16666666666666666;
  // tracker = [
  //   {
  //     time: 0,
  //     input: "s",
  //   },
  //   {
  //     time: 1,
  //     input: "shine ",
  //   },
  //   {
  //     time: 2,
  //     input: "shine cente",
  //   },
  //   {
  //     time: 3,
  //     input: "shine center may ",
  //   },
  //   {
  //     time: 4,
  //     input: "shine center may from ",
  //   },
  //   {
  //     time: 5,
  //     input: "shine center may from notice ",
  //   },
  //   {
  //     time: 6,
  //     input: "shine center may from notice fil",
  //   },
  //   {
  //     time: 7,
  //     input: "shine center may from notice fill num",
  //   },
  //   {
  //     time: 8,
  //     input: "shine center may from notice fill number t",
  //   },
  //   {
  //     time: 9,
  //     input: "shine center may from notice fill number told b",
  //   },
  // ];
  document.getElementById("nav").style.display = "";
  const netWPM = useNetWPM(userInputSentence, originalSentences, timeLimitMin);
  const trackerWithDetails = tracker.map((obj) => {
    return {
      time: obj.time,
      nErrors: useFindNumErrors(obj.input, originalSentences),
      netWPM: useNetWPM(obj.input, originalSentences, timeLimitMin),
      rawWPM: useGrossWPM(obj.input, timeLimitMin),
    };
  });
  const { data, options } = useChart(trackerWithDetails);

  return (
    <>
      <div className="results">
        <div className="stats">
          <div className="wpm">
            <div className="top">WPM</div>
            <div className="bottom">{parseInt(netWPM)}</div>
          </div>
          <div className="acc">
            <div className="top">Accuracy</div>
            <div className="bottom">
              {parseInt(useAccuracy(userInputSentence, originalSentences))}
            </div>
          </div>
        </div>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Results;
