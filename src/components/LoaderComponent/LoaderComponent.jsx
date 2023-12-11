import React from "react";
import "./Loading.css";

export const LoaderComponent = () => {
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
