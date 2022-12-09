import React, { useState, useEffect } from "react";

const ScrollButon = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-btn">
      {showScrollBtn && (
        <button className="btn-position btn-style" onClick={goTop}>
          Top
        </button>
      )}
    </div>
  );
};

export default ScrollButon;
