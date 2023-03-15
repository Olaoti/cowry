import React, { useState } from "react";
const Faq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="faq">
      <div className="faq__heading" onClick={handleShow}>
        <h4>{question}</h4>
        <div className={`sign ${show ? "plus" : "minus"}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`faq__body ${show && "showfaq"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
