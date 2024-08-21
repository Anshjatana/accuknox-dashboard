export const data2 = [
    {
        title: "CSPM Executive Dashboard",
        widgets: [
          {
            id: 1,
            title: "Cloud Accounts",
            data: {
              type: "pie",  // Specify the type for dynamic rendering
              labels: ["Connected", "Not Connected"],
              values: [2, 2],
              colors: ["#42A5F5", "#90CAF9"],
              hoverColors: ["#1E88E5", "#64B5F6"],
            },
          },
          {
            id: 2,
            title: "Cloud account risk assessment",
            data: {
              type: "pie",
              labels: ["Failed", "Warning", "Not available", "Passed"],
              values: [1689, 681, 36, 7253],
              colors: ["#FF6384", "#FFCE56", "#FF9F40", "#4BC0C0"],
              hoverColors: ["#FF6384", "#FFCE56", "#FF9F40", "#4BC0C0"],
            },
          },
        ],
      },
  {
    title: "CWPP Dashboard",
    widgets: [
      {
        title: "Top 5 namespace specific alerts",
        data: "No Graph data available!",
      },
      {
        title: "Workload Alerts",
        data: "No Graph data available!",
      },
    ],
  },
  {
    title: "Registry Scan",
    widgets: [
      {
        id: 1,
        title: "Image Risk Assessment",
        data: {
          type: "line",  // Specify the type for dynamic rendering
          labels: ["Critical", "High", "Moderate", "Low"],
        //   labels: ["Failed", "Warning", "Not available", "Passed"],
              values: [187,67, 346, 153],
              colors: ["maroon", "red", "#FF9F40", "#FFD700"],
        },
      },
      {
        id: 2,
        title: "Image security issues",
        data: {
          type: "line",  // Specify the type for dynamic rendering
          labels: ["Critical", "High", "Moderate", "Low"],
        //   labels: ["Failed", "Warning", "Not available", "Passed"],
              values: [5287, 267, 436, 753],
              colors: ["maroon", "red", "#FF9F40", "#FFD700"],
        },
      },
    ],
  },
];
