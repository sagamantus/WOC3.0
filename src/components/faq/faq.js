import React, { useEffect } from "react";
import "./faq.css";
import faqData from "./faqData";

const Faq = () => {

  useEffect(() => { 
    const faq = document.querySelectorAll(".faq-sec-item");

    faq.forEach((faq_sec_item) => {
      faq_sec_item.addEventListener("click", () => {
        faq_sec_item.classList.toggle("faq-active");
      });
    });
  }, []);

  return (
    <div className="faq-sec" id="faq">
      <div className="faq-sec-heading">Frequently</div>
        <div className="faq-sec-heading-line-2">asked questions</div>
        
        <div className="faq-sec-container">

        {faqData.map((faq, index) => (
          <div key={index} value={false} className={`faq-sec-item`}>
            <div className="faq-sec-ques">
              <div className="arrow">V</div>
              <div className="ques">{faq.question}</div>
            </div>
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
