import React from "react";
import CV from "../../assets/New Resume2.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        style={{ marginRight: "10px", gap: "10px", padding: "10px" }}
        href={CV}
        download
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
