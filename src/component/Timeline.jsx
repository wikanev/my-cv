
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';  
import StarIcon from '@mui/icons-material/Star';  
import './style/Timeline.css';


export default function Timeline() {

    const contentStyle = { background: 'rgb(255, 255, 255)', color: '#000' }
    const iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' }
    const contentArrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)' }

    return (
        <>
        <h1 className="title">Work Experience</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date="2012-2017"
                iconStyle={iconStyle}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Senior Sound Quality Assurance</h3>
                <h4 className="vertical-timeline-element-subtitle">PT Gameloft Indonesia</h4>
                <p>
                    Perform Sound and Audio Testing, Planning Daily Task,Supervising small team,and Training Junior.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date="2017-2021"
                iconStyle={iconStyle}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">IT Support and Helpdesk</h3>
                <h4 className="vertical-timeline-element-subtitle">PT Angkasa Pura Support</h4>
                <p>
                    Helpdesk Support,Network , Troubleshooting , Build Hardware and Software Office
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date="2021-2024"
                iconStyle={iconStyle}
                icon={<StarIcon />}
            >
                <h3 className="vertical-timeline-element-title">Senior Software Quality Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">PT Software Seni</h4>
                <p>
                    Manual Testing, Automation Testing, Test Planning, Test Documentation, Problem Solving, Debugging 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date="2024-Present"
                iconStyle={iconStyle}
                icon={<StarIcon />}
            >
                <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
                <p>
                    Front-end Development, Responsive Web Design, React, HTML, CSS, JavaScript, Bootstrap,Git,
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    )
}
