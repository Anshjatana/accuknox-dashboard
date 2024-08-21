"use client";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import { DataContext } from "@/app/context/DataContext";

const Header = () => {
const { handleSearch, searchQuery } = useContext(DataContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "8px",
      }}
    >
      {" "}
      {/* HeaderContainer */}
      <Box>
        <Typography
          sx={{
            color: "#D3D3D3",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {" "}
          {/* Home */}
          Home {`>`}
          <Box
            component="span"
            sx={{
              color: "#497BD1",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {" "}
            {/* Dashboard */}
            Dashboard v2
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#eaeff6",
          border: "1px solid #ddd",
          borderRadius: "6px",
          marginLeft: "450px",
          width: "450px",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "5px",
        }}
      >
        {" "}
        {/* InputWrapper */}
        <SearchIcon sx={{ color: "#888888" }} /> {/* Search */}
        <input
          type="text"
          placeholder="Search anything..."
          onChange={handleSearch}
          value={searchQuery}
          style={{
            fontWeight: 600,
            borderColor: "transparent",
            backgroundColor: "#eaeff6",
            width: "450px",
            outline: "none",
          }}
        />{" "}
        {/* InputSearch */}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "60px",
        }}
      >
        {" "}
        {/* CustomButtonWrapper */}
        <NotificationsActiveOutlinedIcon
          sx={{
            color: "#318CE7",
            marginLeft: "110px",
            cursor: "pointer",
          }}
        />{" "}
        {/* Notification */}
        <AccountCircleIcon
          sx={{
            color: "grey",
            cursor: "pointer",
            fontSize: "28px",
          }}
        />{" "}
        {/* Profile */}
      </Box>
    </Box>
  );
};

export default Header;
