import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Reason = () => {
  const questionsobj = [
    {
      id: 0,
      question: "Got SEC licence?",
      answer: "Yup!",
    },
    {
      id: 1,
      question: "Saving Charges?",
      answer: "Nope!",
    },
    {
      id: 2,
      question: "Great Interest Rates?",
      answer: "Confam!",
    },
    {
      id: 3,
      question: "Maintenance Fees?",
      answer: "No.",
    },
    {
      id: 4,
      question: "Convinced?",
      answer: "Sign up now!",
      acolor: "#0066f5",
    },
  ];
  var [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (number < questionsobj.length - 1) {
        setNumber(number + 1);
      } else {
        setNumber(0);
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [number, questionsobj.length]);

  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    gsap.fromTo(
      answerRef.current,
      { opacity: 0, x: 10, y: 50 },
      { opacity: 1, x: 0, y: 0, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      sectionRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -20, duration: 0.5, delay: 2.5 }
    );
  }, [number, questionRef, answerRef, sectionRef]);
  return (
    <div className="reason">
      <div className="reason-head">WHY COWRYWISE ?</div>
      <div className="questions-section" ref={sectionRef}>
        <div
          style={{ color: "rgba(8, 37, 82, 0.6)" }}
          className="questions-section__question"
          ref={questionRef}
        >
          {questionsobj[number].question}
        </div>
        <div
          style={
            questionsobj[number].acolor
              ? { color: `${questionsobj[number].acolor}` }
              : { color: " #082552" }
          }
          className="questions-section__answer"
          ref={answerRef}
        >
          {questionsobj[number].answer}
        </div>
      </div>
    </div>
  );
};

export default Reason;
