import cloudvideo from '../pages/Assets/3457921901-preview.mp4'
import './style/VideoBackground.css'

const VideoBackground = () => {
    return (
      <div className="video-background">
        <video autoPlay muted loop id="bg-video">
          <source src={cloudvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoBackground;