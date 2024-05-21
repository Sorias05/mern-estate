import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    success: false,
    message: "",
  });

  let timer;

  const showToast = (success, message) => {
    if (toast.show === true) {
      hideToast(success, message);
      setTimeout(() => {
        setToast({
          show: true,
          success: success,
          message: message,
        });
      }, 300);
    } else {
      setToast({
        show: true,
        success: success,
        message: message,
      });
    }
    timer = setTimeout(() => {
      hideToast(success, message);
    }, 5000);
  };

  const hideToast = (success, message) => {
    setToast({
      show: false,
      success: success,
      message: message,
    });
  };

  const value = { toast, showToast, hideToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};