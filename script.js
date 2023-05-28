/** @format */
// Line Chart :



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
