import video from "./video/Gradient.mp4";

export default function HomePage() {
  const handleVideoClick = () => {
    console.log("Video clicked!");
  };

  return (
    <div className="portfolio-container">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        onClick={handleVideoClick}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <h1 className="video-title">PORTFOLIO</h1>
        <p className="video-title-two">MULTIMEDIADESIGN</p>
        <div className="pil">
          <img src="/img/pil.png"></img>
        </div>
      </div>
    </div>
  );
}
