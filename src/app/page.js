import Image from "next/image";
import  "./globals.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header"
import App from "./components/Home/Home";
import DataProvider from "./context/DataContext";
import Widgets from "./components/Home/widgets";

export default function Home() {
  return (
    <>
   <DataProvider>
    <Header/>
    <Box style={{marginTop:'5px', backgroundColor:'#eaeff6' ,height:'100%',paddingBottom:'2rem'}}>
      <App/>
      <Widgets/>
    </Box>
    </DataProvider>
    </>
  );
}
