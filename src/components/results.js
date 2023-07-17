import React from "react";
import { useLocation } from "react-router-dom";
import useFindNumErrors from "../hooks/useFindNumErrors";
import Header from "./header";
import useGrossWPM from "../hooks/useGrossWPM";
import useAccuracy from "../hooks/useAccuracy";
import useChart from "../hooks/useChart";
import { Line } from "react-chartjs-2";

const Results = () => {
  document.getElementById("nav").style.display = "";
  const { userInputSentence, originalSentences, timeLimitMin, tracker } =
    useLocation().state;
  const grossWPM = useGrossWPM(
    userInputSentence,
    originalSentences,
    timeLimitMin
  );
  const trackerWithDetails = tracker.map((obj) => {
    return {
      time: obj.time,
      nErrors: useFindNumErrors(obj.input, originalSentences),
      grossWPM: useGrossWPM(obj.input, originalSentences, timeLimitMin),
    };
  });
  const { data, options } = useChart(trackerWithDetails);

  return (
    <>
      <Header />
      <div className="results">
        <h1>Results</h1>
        <h2>Gross WPM: {grossWPM}</h2>
        <h2>Accuracy: {useAccuracy(userInputSentence, originalSentences)} %</h2>
        <div style={{ height: "300px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Results;
