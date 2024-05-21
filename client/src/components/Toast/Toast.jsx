import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { useToast } from "../../redux/ToastProvider";

const Toast = () => {
  const { toast, hideToast } = useToast();

  return (
    <div className={`toast ${toast.show ? "active" : ""} bg-slate-100`}>
      <div className="toast-content">
        {toast.success ? (document.querySelector(':root').style.setProperty('--bg-color', 'rgb(21 128 61)')) : (document.querySelector(':root').style.setProperty('--bg-color', 'rgb(185 28 28)'))}
        <i
          className={`fas fa-${toast.success ? "check" : "times"} check`}
        ></i>
        <div className="message">
          <span className="font-semibold">
            {toast.success ? "Success" : "Error"}
          </span>
          <span className="block">{toast.message}</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark close" onClick={() => hideToast(toast.success, toast.message)}></i>
      <div
        className={`progress ${toast.show ? "active" : ""} ${toast.show ? "" : "bg-white"}`}
      ></div>
    </div>
  );
};

export default Toast;
