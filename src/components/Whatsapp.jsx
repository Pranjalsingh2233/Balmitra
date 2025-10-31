import React, { useEffect } from "react";
import "./Whatsapp.css";

export default function Whatsapp() {
  useEffect(() => {
    const whatsapp = document.querySelector(".whatsapp");
    if (whatsapp) {
      setTimeout(() => {
        whatsapp.classList.add("show");
      }, 800);
    }
  }, []);

  return (
    <div className="whatsapp">
      <p>Need any help?</p>
      <a href="https://wa.me/918400399265" target="_blank" rel="noreferrer">
        <img src="/whatsapp.webp" alt="WhatsApp" />
      </a>
    </div>
  );
}
