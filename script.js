/** @format */
// Line Chart :

/** @format */

const ctx = document.getElementById("myChart");
const doughnutChart = document.getElementById("doughnutChart");
const areaCode = document.getElementById("areaCode");
const threeLinesData = document.getElementById("threeLinesData");
const pie_chart = document.getElementById("pie_chart");

const names = [
  "John",
  "Emily",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Robert",
  "Emma",
  "David",
  "Mia",
  "Joseph",
  "Charlotte",
  "Daniel",
  "Amelia",
];
var line1,
  line2,
  line3 = [];

line1 = Array(16)
  .fill()
  .map(() => Math.floor(Math.random() * 1601));
line2 = Array(16)
  .fill()
  .map(() => Math.floor(Math.random() * 1601));
line3 = Array(16)
  .fill()
  .map(() => Math.floor(Math.random() * 1601));

// console.log("line1", line1);
// console.log("line2", line2);
// console.log("line3", line3);

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
// const areaCode_labels = Utils.months({ count: 7 });

const threeLines_Data = {
  labels: names,
  datasets: [
    {
      label: "Dataset 1",
      data: line1,
      borderColor: "#6818EC",
      backgroundColor: "#6818EC",
    },
    {
      label: "Dataset 2",
      data: line2,
      borderColor: "#ee68Ee",
      backgroundColor: "#ee68Ee",
    },
    {
      label: "Dataset 2",
      data: line3,
      borderColor: "#88ff61",
      backgroundColor: "#88ff61",
    },
  ],
};

new Chart(threeLinesData, {
  type: "line",
  data: threeLines_Data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Suggested Min and Max Settings",
      },
    },
    scales: {
      y: {
        // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
        // suggestedMin: 30,
        // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
        // suggestedMax: 50,
      },
    },
  },
});

const numers_pie = { count: 5, min: 0, max: 100 };

const pie_chart_data = {
  labels: [
    "Overall Yay",
    "Overall Nay",
    "Group A Yay",
    "Group A Nay",
    "Group B Yay",
    "Group B Nay",
    "Group C Yay",
    "Group C Nay",
  ],
  datasets: [
    {
      backgroundColor: ["#F1EFFC", "#7F73DF"],
      data: [21, 79],
    },
    {
      backgroundColor: ["#F1EFFC", "#6325C2"],
      data: [33, 67],
    },
    {
      backgroundColor: ["#F1EFFC", "#27D8D0"],
      data: [30, 70],
    },
    {
      backgroundColor: ["#F1EFFC", "#E6D475"],
      data: [10, 90],
    },
    {
      backgroundColor: ["#F1EFFC", "#D17276"],
      data: [20, 80],
    },
    {
      backgroundColor: ["#F1EFFC", "#0AA92B"],
      data: [10, 90],
    },
  ],
};
new Chart(pie_chart, {
  type: "pie",
  data: pie_chart_data,
  options: {
    cutout: 80,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          generateLabels: function (chart) {
            // Get the default label list
            const original =
              Chart.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            // Build an array of colors used in the datasets of the chart
            let datasetColors = chart.data.datasets.map(function (e) {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            // Modify the color and hide state of each label
            labelsOriginal.forEach((label) => {
              // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
              label.datasetIndex = (label.index - (label.index % 2)) / 2;

              // The hidden state must match the dataset's hidden state
              label.hidden = !chart.isDatasetVisible(label.datasetIndex);

              // Change the color to match the dataset
              label.fillStyle = datasetColors[label.index];
            });

            return labelsOriginal;
          },
        },
        onClick: function (mouseEvent, legendItem, legend) {
          // toggle the visibility of the dataset from what it currently is
          legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden =
            legend.chart.isDatasetVisible(legendItem.datasetIndex);
          legend.chart.update();
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const labelIndex = context.datasetIndex * 2 + context.dataIndex;
            return (
              context.chart.data.labels[labelIndex] +
              ": " +
              context.formattedValue
            );
          },
        },
      },
    },
  },
});

new Chart(areaCode, {
  type: "radar",
  data: {
    labels: ["12", "19", "3", "5", "2", "3"],
    datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: [102, 129, 23, 155, 32, 73],
      //     borderColor: "#CD1818",
      //     backgroundColor: "rgba(239, 101, 134, 0.5)",
      //     borderWidth: 1,
      //   },
      {
        // fill:false,
        label: "",
        data: [152, 123, 55, 159, 122, 13],
        borderColor: "#6818EC",
        backgroundColor: "rgba(96, 35, 214, 0.5)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Area Code",
      },
    },
  },
});

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        axis: "y",
        backgroundColor: "#6818EC",
        // borderColor: "#CD1818",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    // if you want make the bar horizontal :
    // indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: ["CNI", "BE", "FC", "Gk"],
    datasets: [
      {
        label: "Training Models",
        data: [4.88, 1.78, 0.247, 13.9],
        backgroundColor: ["#EF6586", "#23DBCF", "#FFC75A", "#6023D6"],
        hoverOffset: 4,
        weight: 2,
      },
    ],
  },
  options: {
    cutout: 120,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Training Models",
      },
    },
  },
});


new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label:'Total Earning ',
         backgroundColor: "#6023D6",
        borderColor: "#6023D6",
        data: [12, 19, 3, 5, 12, 3, 55, 13],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
        legend: {
          position: "bottom",
        },
      },
  },
});
