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
        label: "Net WPM",
        data: trackerWithDetails.map((obj) => obj.netWPM),
        borderColor: "#E2B714",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Raw WPM",
        data: trackerWithDetails.map((obj) => obj.rawWPM),
        borderColor: "#b3b3aa",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const decimation = {
    enabled: true,
    algorithm: "min-max",
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Performance over time",
      },
      decimation: decimation,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    animations: {
      radius: {
        duration: 400,
        easing: "linear",
        loop: (context) => context.active,
        delay: 300,
      },
    },
    hoverRadius: 12,
    hoverBackgroundColor: "yellow",
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
    scales: {
      x: {
        ticks: {
          callback: function (val, index) {
            return index % 5 === 0 ? this.getLabelForValue(val) : "";
          },
        },
      },
      y: {
        ticks: {
          callback: function (val, index) {
            return index % 5 === 0 ? this.getLabelForValue(val) : "";
          },
        },
      },
    },
  };

  return { data, options };
};

export default useChart;
