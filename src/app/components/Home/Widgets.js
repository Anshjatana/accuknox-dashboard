"use client";
import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { data2 } from "../../constants/data2";
import Addwidget from "./Addwidget";
import { DataContext } from "@/app/context/DataContext";
import PieChartWidget from "./PieChartWidget"; // Import the PieChartWidget component
import LineChartWidget from './LineChartWidget';

const Widgets = () => {
  const { newWidget } = useContext(DataContext);
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);

  // Initialize state with the first widget's data
  const [state, setState] = useState(data2[0].widgets);

  const handleClick = (index) => {
    eval(`setIsVisible${index}(false)`);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {state.map((dashboard, index) => (
        <Box
          sx={{
            width: "330px",
            borderRadius: "10px",
            display: "flex",
          }}
          key={index}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "17px",
                marginLeft: "20px",
                marginBottom: "4px",
              }}
            >
              {dashboard.title}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#eaeff6",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {dashboard.widgets.map((widget, idx) => {
                const isVisible = eval(`isVisible${idx + 1}`);
                return (
                  isVisible && (
                    <Box
                      sx={{
                        backgroundColor: "white",
                        width: "426px",
                        height: "200px",
                        borderRadius: "15px",
                        marginLeft: "15px",
                        cursor: "pointer",
                      }}
                      key={idx}
                    >
                      <Typography
                        sx={{
                          padding: "5px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        {widget.title}
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "#ddd",
                          width: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          left: "396px",
                          bottom: "27px",
                          borderRadius: "68px",
                          color: "black",
                          cursor: "pointer",
                          padding: "2px",
                        }}
                        onClick={() => handleClick(idx + 1)}
                      >
                        x
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          position: "relative",
                          top: "-40px",
                          textAlign: "center", // Centers text within the Typography component
                        }}
                      >
                        {widget.data.type === "pie" && (
                            <PieChartWidget data={widget.data}  />
                          )}
                          {widget.data.type === "line" && (
                            <LineChartWidget data={widget.data} title={widget.title} />
                          )}
                          {widget.data.type === undefined && (
                            <Typography>{widget.data}</Typography>
                          )}
                      </Box>
                    </Box>
                  )
                );
              })}
              <Addwidget data={dashboard} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Widgets;
