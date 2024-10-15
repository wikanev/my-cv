import React from 'react';
import { Typography, Stack, Divider, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Navbar from '../component/NavBar';   
import Footer from '../component/Footer';
import VideoBackground from '../component/VideoBackground';
import Hero from '../component/Hero';
import './style/About.css';


const About = () => {
  
  const yearNow = () => {
    return new Date().getFullYear()
  }
   const age = yearNow() - 1987

  const biodata = [
    {name: 'Name', value: 'Wikan Pinandhito'},
    {name: 'Age', value: age},
    {name: 'Nationality', value: 'Indonesian'},
    {name: 'From', value: 'Yogyakarta, Indonesia'},
    {name: 'Address', value: 'Semarang, Indonesia'},
    {name: 'Job', value: 'QA Engineer, Front-End Developer,IT Support, IT Consultant, Video and Audio Engineer'},
    {name: 'Family', value: 'Husband and father of 1 children'},
    {name: 'Education', value: 'Universitas Pembangunan Nasional Yogyakarta - Teknik Informatika'},
    {name: 'Languages', value: 'Indonesian, English'},
    {name: 'Hobby', value: 'Coding,Music,Game,Technology'},
    {name: 'Phone', value: '+6285868066280'},
    {name: 'Github', value: 'https://github.com/wikanev'},
    {name: 'Email', value: 'wikanevsi@gmail.com'},
  ];

  return (
    <>
    <Navbar />
    <VideoBackground />
    <div className="about-container">

    <Stack id="about" direction="column" alignItems="center" spacing={2} sx={{  m: 2,  backgroundColor: 'white', borderRadius: 2,display: 'flex', flexDirection: 'column', justifyContent: 'center', width: {
  xs: "90%",
  sm: "80%",
  md: "70%",
  lg: "60%",
  xl: "50%", 
} }}>
  <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily:"Raleway" , fontWeight: 'bold' }}>
    About Me
  </Typography>
  <Divider />
  <TableContainer>
    <Table>
      <TableHead>
        
      </TableHead>
      <TableBody>
        {biodata.map((row, index) => (
          <TableRow key={index}>
            <TableCell sx={{ fontWeight: 'bold',fontFamily:"Raleway" }}>{row.name+' : '}</TableCell>
            <TableCell sx={{fontFamily:"Raleway"}}>{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Stack>
</div>
    <Footer />
    </>
  );
};

export default About;

