import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      {
        <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
      }
    </div>
  );
};

export default Loading;
