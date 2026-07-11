import React, { useRef } from "react";

const IntroMedia = ({ videoSrc, posterSrc, alt }) => {
  const frameRef = useRef(null);

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

  return (
    <div
      className="hero__media-frame"
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {videoSrc ? (
        <video
          className="hero__media"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img className="hero__media" src={posterSrc} alt={alt} />
      )}
      <div className="hero__media-glow" />
    </div>
  );
};

export default IntroMedia;
