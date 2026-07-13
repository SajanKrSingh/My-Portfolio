import React from "react";
import "./marquee.css";

const Marquee = ({ items }) => {
  const row = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
