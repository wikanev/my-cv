import ReactCardSlider from 'react-card-slider-component';
import './style/Services.css';
import QALogo from '../pages/Assets/QALogo.png'
import JSLogo from '../pages/Assets/JSLogo.png'
import HTMLCSS from '../pages/Assets/HTMLCSS.png'
import ReactLogo from '../pages/Assets/ReactLogo.png'
import WPlogo from '../pages/Assets/WPLogo.png'
import ITLogo from '../pages/Assets/ITLogo.png'
import PMLogo from '../pages/Assets/PMLogo.png'

export default function Services() {
  

  const slides = [
    {image:"https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg",title:"Web Development",description:"This is a description",clickEvent: () => {}},
    {image:QALogo,title:"Software Quality Assurance Engineer",description:"This is a seventh description",clickEvent: () => {}},
    {image:JSLogo,title:"Java Script",description:"This is a second description",clickEvent: () => {}},
    {image:HTMLCSS,title:"HTML5/CSS3",description:"This is a third description",clickEvent: () => {}},
    {image:ReactLogo,title:"React JS",description:"This is a fourth description",clickEvent: () => {}},
    {image:WPlogo,title:"Wordpress",description:"This is a fifth description",clickEvent: () => {}},
    {image:ITLogo,title:"IT Solutions",description:"This is a sixth description",clickEvent: () => {}},
    {image:PMLogo,title:"Software Projects Manager",description:"This is a seventh description",clickEvent: () => {}},
    
]
  return (
    <div className="services">
    <h1 className="services-title">Services</h1>
    <ReactCardSlider slides={slides}/>

    </div>
  )
}



