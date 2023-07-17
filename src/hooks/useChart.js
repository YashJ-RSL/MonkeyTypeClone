import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const useChart = (trackerWithDetails) => {
  const labels = trackerWithDetails.map((obj) => obj.time);
  const data = {
    labels,
    datasets: [
      {
        label: "WPM",
        data: trackerWithDetails.map((obj) => obj.grossWPM),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Errors",
        data: trackerWithDetails.map((obj) => obj.nErrors),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Performance over time",
      },
    },
  };
  return { data, options };
};

export default useChart;
