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
