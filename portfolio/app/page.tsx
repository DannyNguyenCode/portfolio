'use client'
import Content from "@components/Content";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Box } from "@mui/material";
export default function Home() {
  return (

      <main>
        <Nav/>
        <Box sx={{ width: '100%' }}>
        </Box>
        <Content/>
        <Footer/>
      </main>


  );
}
