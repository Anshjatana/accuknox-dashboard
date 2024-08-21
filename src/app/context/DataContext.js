"use client";
import { createContext, useState } from "react";

export const DataContext = createContext(" ");

const DataProvider = ({ children }) => {
  const [newWidget, setNewWidget] = useState({ title: "", text: "" });
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updatedWidget = (newWidgetData) => {
    setNewWidget((prevWidget) => ({
      ...prevWidget,
      ...newWidgetData,
    }));
  };

  return (
    <DataContext.Provider
      value={{ newWidget, updatedWidget, open, handleClick, handleClose, setOpen, searchQuery, handleSearch, setSearchQuery }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
