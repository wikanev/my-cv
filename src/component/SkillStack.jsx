import React from 'react';
import { SkillBar } from 'react-skillbars';
import './style/SkillStack.css';

const SkillBars = () => {
  console.log('SkillBars component is being rendered');

  const devSkills = [
    { type: 'JavaScript', level: 70 },
    { type: 'React', level: 65 },
    { type: 'Wordpress', level: 70 },
    { type: 'HTML/CSS', level: 90 },
    { type: 'Git', level: 75 },
  ];

  const qaSkills = [
    
    { type: 'Manual QA', level: 90 },
    { type: 'Debugging', level: 80 },
    { type: 'API Testing', level: 70 },
    { type: 'Katalon', level: 75 },
    { type: 'Cypress', level: 75 },
    { type: 'Jira', level: 70 },
    { type: 'Postman', level: 70 },
    { type: 'Test Case', level: 70 },
  
]

const itSupportSkills = [
    
  { type: 'Helpdesk', level: 90 },
  { type: 'Troubleshooting', level: 80 },
  { type: 'Knowledge', level: 80 },
  { type: 'Network', level: 60 },
  { type: 'Planning', level: 80 },
  { type: 'OS Knowledge', level: 70 },
  { type: 'Software', level: 80 },
  { type: 'Hardware', level: 60 }
  

]

const otherSkills = [
    
  { type: 'English', level: 75 },
  { type: 'Communication', level: 75 },
  { type: 'Leadership', level: 80 },
  { type: 'PM Skill', level: 70 },
  { type: 'Adaptability', level: 90 },
  { type: 'Figma UI/UX', level: 60 },
  { type: 'Multimedia', level: 60 },
  

]

  const colors = {
    bar: '#3498db',
    title: {
      text: 'black',
      background: 'transparent',
    },
  };

  return (
    <>
      <div className="skillbar-main-container">
        <div className="skillbar-container"> 
          <div id="devSkills"  className="skill-stack gradient-border">
            <h1>Developer Skills</h1>
            <SkillBar 
              skills={devSkills} 
              colors={colors} 
              height={20}  
              animationDelay={0} 
              animationDuration={1500} 
              symbolColor={'black'} 
              symbol=' ' 
              
            />
          </div>
          <div id="qaSkills" className="skill-stack gradient-border">
            <h1>QA Skills</h1>
            <SkillBar 
              skills={qaSkills} 
              colors={colors} 
              height={20} 
              animationDelay={0} 
              animationDuration={1500} 
              symbolColor={'black'} 
              symbol=' ' 
            />
          </div>
        </div>
  
        <div className="skillbar-container"> {/* Fixed className */}
          <div id="itSupportSkill" className="skill-stack gradient-border">
            <h1>IT Support Skills</h1>
            <SkillBar 
              skills={itSupportSkills} 
              colors={colors} 
              height={20} 
              animationDelay={0} 
              animationDuration={1500} 
              symbolColor={'black'} 
              symbol=' ' 
              
            />
          </div>
          <div id="otherSkill" className="skill-stack gradient-border">
            <h1>Other Skills</h1>
            <SkillBar 
              skills={otherSkills} 
              colors={colors} 
              height={20} 
              animationDelay={0} 
              animationDuration={1500} 
              symbolColor={'black'} 
              symbol=' ' 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBars;