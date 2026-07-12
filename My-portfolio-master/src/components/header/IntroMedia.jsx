import React, { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const IntroMedia = ({ videoSrc, posterSrc, alt }) => {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleMouseMove = (e) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = () => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <div
      className="hero__media-frame"
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {videoSrc ? (
        <>
          <video
            ref={videoRef}
            className="hero__media"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted={muted}
            playsInline
          />
          <button
            type="button"
            className="hero__media-sound"
            onClick={toggleMute}
            aria-label={muted ? "Unmute intro video" : "Mute intro video"}
          >
            {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </>
      ) : (
        <img className="hero__media" src={posterSrc} alt={alt} />
      )}
      <div className="hero__media-glow" />
    </div>
  );
};

export default IntroMedia;
