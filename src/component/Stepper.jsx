import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import './style/Stepper.css'

const steps = [
  { label: 'Senior Sound Quality Assurance (2012-2017) at PT Gameloft Indonesia', content: 'Android Games : Asphalt 7 PHD, Dragon Mania PHD, Dungeon Hunter 5,Despicable Me 2' },
  { label: 'IT Support (2017-2021) at PT Angkasa Pura Sopport', content: '' },
  { label: 'QA Engineer (2021-2024)', content: 'Worked on various Project, Web and Mobile Application, E-Commerce, E-Procurement, Marketplace, Accounting, E-Learning, E-Performance' },
];

const steps2 = [
  { label: 'Video and Audio Engineer (2015 - present)', content: 'Video Editing, Audio Editing,Audio Engineering, Scoring' },
  { label: 'Wordpress Developer (2021-present)', content: 'PT Angkasa Pura Sopport' },
  { label: 'IT Consultant (2023-present)', content: 'Software Seni' },
];

const VerticalStepper = () => {
  

  return (<>
    <div className="vertical-stepper" id="stepper-1">
      <h1> Career Experience</h1>
      <Box sx={{ maxWidth: 400 }}>
    <Stepper orientation="vertical">
      {steps.map((step, index) => (
        <Step key={step.label} active={true}>
          <StepLabel>{step.label}</StepLabel>
          <StepContent>
            <p>{step.content}</p>
            
          </StepContent>
        </Step>
      ))}
    </Stepper>
    </Box>
    </div>

<div className="vertical-stepper" id="stepper-2">
<h1> Freelance Experience</h1>
<Box sx={{ maxWidth: 400 }}>
<Stepper orientation="vertical">
{steps2.map((step, index) => (
  <Step key={step.label} active={true}>
    <StepLabel>{step.label}</StepLabel>
    <StepContent>
      <p>{step.content}</p>
    </StepContent>
  </Step>
))}
</Stepper>
</Box>
</div>
</>
  );
};

export default VerticalStepper;
