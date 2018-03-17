import React from "react";

const VideoBg = () => (
  <div className="video-bg">
    <video autoPlay loop muted plays-inline>
      <source src="video/london.mp4" type="video/mp4" />
    </video>
  </div>
);

export default VideoBg;
