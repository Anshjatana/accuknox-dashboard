const data = {
      "categories": [
        {
          "title": "CSPM Executive Dashboard",
          "widgets": [
            {
              "title": "Cloud Accounts",
              "type": "pie_chart",
              "data": {
                "total": 2,
                "connected": 2,
                "not_connected": 0,
                "colors": ["#007BFF", "#E5E7EB"]
              }
            },
            {
              "title": "Cloud Account Risk Assessment",
              "type": "donut_chart",
              "data": {
                "total": 9659,
                "categories": [
                  {
                    "status": "Failed",
                    "count": 1689,
                    "color": "#DC3545"
                  },
                  {
                    "status": "Warning",
                    "count": 681,
                    "color": "#FFC107"
                  },
                  {
                    "status": "Not Available",
                    "count": 36,
                    "color": "#E5E7EB"
                  },
                  {
                    "status": "Passed",
                    "count": 7253,
                    "color": "#28A745"
                  }
                ]
              }
            }
          ]
        },
        {
          "title": "CWPP Dashboard",
          "widgets": [
            {
              "title": "Top 5 Namespace Specific Alerts",
              "type": "line_chart",
              "data": "No Graph Data Available",
              "color": "#E5E7EB"
            },
            {
              "title": "Workload Alerts",
              "type": "line_chart",
              "data": "No Graph Data Available",
              "color": "#E5E7EB"
            }
          ]
        },
        {
          "title": "Registry Scan",
          "widgets": [
            {
              "title": "Image Risk Assessment",
              "type": "bar_chart",
              "data": {
                "total_vulnerabilities": 1470,
                "categories": [
                  {
                    "severity": "Critical",
                    "count": 9,
                    "color": "#DC3545"
                  },
                  {
                    "severity": "High",
                    "count": 150,
                    "color": "#FFC107"
                  },
                  {
                    "severity": "Medium",
                    "count": 313,
                    "color": "#17A2B8"
                  },
                  {
                    "severity": "Low",
                    "count": 998,
                    "color": "#E5E7EB"
                  }
                ]
              }
            },
            {
              "title": "Image Security Issues",
              "type": "bar_chart",
              "data": {
                "total_images": 2,
                "categories": [
                  {
                    "severity": "Critical",
                    "count": 2,
                    "color": "#DC3545"
                  },
                  {
                    "severity": "High",
                    "count": 2,
                    "color": "#FFC107"
                  },
                  {
                    "severity": "Medium",
                    "count": 0,
                    "color": "#17A2B8"
                  },
                  {
                    "severity": "Low",
                    "count": 0,
                    "color": "#E5E7EB"
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  }
  