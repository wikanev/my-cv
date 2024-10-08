import ReactCardSlider from '../component/ReactCardSlider.jsx';
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
    {image:"https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg",title:"Web Development",clickEvent: () => {}},
    {image:QALogo,title:"Software QA Engineer",clickEvent: () => {}},
    {image:JSLogo,title:"Java Script",clickEvent: () => {}},
    {image:HTMLCSS,title:"HTML5/CSS3",clickEvent: () => {}},
    {image:ReactLogo,title:"React JS",clickEvent: () => {}},
    {image:WPlogo,title:"Wordpress",clickEvent: () => {}},
    {image:ITLogo,title:"IT Solutions",clickEvent: () => {}},
    {image:PMLogo,title:"Software Projects Manager",clickEvent: () => {}},
    
]

  return (
    <div className="services">
    <h1 className="services-title">Services</h1>
    <ReactCardSlider 
    slides={slides}
    
  
    
    />
     

    </div>
  )
}



