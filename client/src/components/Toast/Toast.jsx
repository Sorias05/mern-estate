import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const Toast = ({ show, message, type, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer1 = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [show, onClose]);

  return (
    <div className={`toast ${show ? "active" : ""} bg-slate-100`}>
      <div className="toast-content">
        <i
          className={`fas fa-${
            type === "success" ? "check" : "times"
          } fa-check check`}
        ></i>
        <div className="message">
          <span className="font-semibold">
            {type === "success" ? "Success" : "Error"}
          </span>
          <span className="block">{message}</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark close" onClick={onClose}></i>
      <div
        className={`progress ${show ? "active" : ""} ${show ? "" : "bg-white"}`}
      ></div>
    </div>
  );
};

export default Toast;
