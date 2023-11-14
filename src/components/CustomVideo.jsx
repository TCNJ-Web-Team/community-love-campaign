import React, { useRef, useState, useEffect } from "react";
import "../styles/custom-video-player.scss";

// import video from "../assets/video.mp4";
// import captions from "../assets/diamond-1.vtt";
import useVideoPlayer from "../hooks/useVideoPlayer";

const CustomVideo = () => {
  const [showCaptions, setShowCaptions] = useState(false); // Add state variable
  const [isHovered, setIsHovered] = useState(true);
  const [hasSubs, setHasSubs] = useState(false); // State to track subtitles

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleTouchStart = () => {
    // console.log("Touch");

    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(!isHovered);
      // Code to be executed after 2 seconds
    }, 2000);
  };
  const videoElement = useRef(null);
  // useEffect(() => {
  //   // Use useEffect to check if the video has subtitles on mount
  //   if (videoElement.current) {
  //     const videoTracks = videoElement.current.textTracks;
  //     const hasCaptions = Array.from(videoTracks).some(
  //       (track) => track.kind === "captions" && track.mode === "showing"
  //     );
  //     setHasSubs(hasCaptions);
  //   }
  // }, []);

  const falseElement = false;
  // Function to toggle the captions
  const toggleCaptions = () => {
    setShowCaptions(!showCaptions);
    if (videoElement.current) {
      // Use videoElement to control the caption track
      if (showCaptions) {
        videoElement.current.textTracks[0].mode = "hidden";
      } else {
        videoElement.current.textTracks[0].mode = "showing";
      }
    }
  };
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrCustomVideoer">
        <video
          preload="true"
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
          poster="./images/pav-video-final.jpg"
          controls={falseElement}
          className={`video ${playerState.isPlaying ? "playing" : "stopped"}`}
          playsInline // Prevent fullscreen on modern browsers
          webkit-playsinline="true"
          onMouseOver={handleMouseOver}
          onMouseOut={() => setIsHovered(null)}
          onTouchStart={handleTouchStart}
        >
          <source
            type="video/mp4"
            src="https://player.vimeo.com/progressive_redirect/playback/877982802/rendition/720p/file.mp4?loc=external&signature=bc200f96f6b07e8b374c471bda8ecca669eb66eb6ebc062747d83cee4bb49933"
          />

          {/* <track
            preload="true"
            kind="captions"
            label="Video Captions"
            srcLang="en"
            src="/astro/diamond-1.vtt"
          ></track> */}
        </video>

        <button
          id="play-pause-button"
          onMouseOver={handleMouseOver}
          onClick={togglePlay}
          className={isHovered ? "active" : "hidden"}
          onTouchStart={handleTouchStart}
        >
          {!playerState.isPlaying ? (
            <img src="./images/play-button.svg" alt="Play" />
          ) : (
            <img src="./images/pause-button.svg" alt="Pause" />
          )}
        </button>

        <button
          id="mute-button"
          onMouseOver={handleMouseOver}
          className={isHovered ? "active" : "hidden"}
          onClick={toggleMute}
        >
          {!playerState.isMuted ? (
            <i className="bx bxs-volume-full"></i>
          ) : (
            <i className="bx bxs-volume-mute"></i>
          )}
        </button>

        {hasSubs && (
          <button
            className={isHovered ? "active" : "hidden"}
            id="caption-btn"
            onMouseOver={handleMouseOver}
            onClick={toggleCaptions}
          >
            {!showCaptions ? (
              <i className="bx bx-captions"></i>
            ) : (
              <i className="bx bxs-captions"></i>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomVideo;
