'use client';
import { Box, Typography, Dialog, Tab, Input } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { data2 } from "@/app/constants/data2";
import { DataContext } from "@/app/context/DataContext";


const Addwidget = ({ props }) => {
  const [value, setValue] = useState("1");
  const [check, setCheck] = useState(true);
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const data = data2.widgets;

  const { updatedWidget, open, handleClick, handleClose, setOpen } = useContext(DataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheck(!check);
    }
  };

  const handleConfirm = () => {
    updatedWidget({ name, text });
    setOpen(false);
  };

  const handleData = (e) => {
    const id = e.target.id.slice(8, 9);

    switch (e.target.id) {
      case `widgets_${id}_name`:
        setName(e.target.value);
        break;
      case `widgets_${id}_text`:
        setText(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "416px",
        height: "200px",
        borderRadius: "15px",
        marginLeft: "15px",
      }}
    >
      <Box
        component="button"
        sx={{
          color: "grey",
          backgroundColor: "white",
          border: "1px solid #ddd",
          padding: "2px 12px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        &#43; Add widget
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
            height: "100vh",
            width: "45%",
            maxHeight: "100vh",
            margin: 0,
            borderRadius: "0", // To ensure the dialog covers full height and right side
            maxWidth: "none",
          },
        }}
      >
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#010048",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
              padding: "5px",
              paddingX: "14px",
            }}
          >
            <Typography>Add widget</Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </Typography>
          </Box>
          <Box sx={{ padding: "6px", color: "black" }}>
            <Typography>
              Personalize your dashboard by adding the following widget
            </Typography>
          </Box>
          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="CSPM" value="1" />
                  <Tab label="CSPW" value="2" />
                  <Tab label="Image" value="3" />
                  <Tab label="Ticket" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1" >
                <input type="checkbox" onChange={handleCheck}  />
                {' '}Cloud Accounts
              </TabPanel>
              <TabPanel value="1">
                <input type="checkbox" />
                {' '}Cloud Accounts Risk Assessment
              </TabPanel>
              <TabPanel value="2">
                <input type="checkbox" />
                {' '}Top 5 namespace specific alerts
              </TabPanel>
              <TabPanel value="2">
                <input type="checkbox" />
                {' '}Workload alerts
              </TabPanel>
              <TabPanel value="2">
                <Input
                disableUnderline={false}
                sx={{ border: "1px solid #ddd", borderRadius: "6px", padding: "3px",marginBottom: "6px" }}
                  type="text"
                  id="widgets_1_name"
                  onChange={handleData}
                  placeholder="Enter widget name"
                />
                <br />
                <Input
                 sx={{ border: "1px solid #ddd", borderRadius: "6px", padding: "3px" }}
                  type="text"
                  id="widgets_1_text"
                  onChange={handleData}
                  placeholder="Enter widget text"
                />
              </TabPanel>
              <TabPanel value="3">
                <input type="checkbox" />
                {' '}Image Risk Assessment
              </TabPanel>
              <TabPanel value="3">
                <input type="checkbox" />
                {' '}Image Security Issues
              </TabPanel>
            </TabContext>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "9px",
              right: "40px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Box
              component="button"
              sx={{
                padding: "10px 25px",
                borderRadius: "10px",
                border: "1px solid darkblue",
                backgroundColor: "white",
                color: "darkblue",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Box>
            <Box
              component="button"
              sx={{
                padding: "10px 25px",
                borderRadius: "10px",
                backgroundColor: "#03002E",
                color: "white",
                border: "0px",
                fontWeight: 400,
                cursor: "pointer",
              }}
              onClick={handleConfirm}
            >
              Confirm
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Addwidget;
