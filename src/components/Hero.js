import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import img from "../assets/img/hero-bg.webp";
import "animate.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${img}) no-repeat center/cover;
  position: relative;
  padding: 0 40px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #000;
    opacity: 0.35;
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0 20px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 72px;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 992px) { font-size: 56px; }
  @media (max-width: 600px) { font-size: 38px; }
`;

const SubTitle = styled.p`
  font-size: 28px;
  color: white;

  @media (max-width: 992px) { font-size: 22px; }
  @media (max-width: 600px) { font-size: 18px; }
`;

const Highlight = styled.span`
  color: #149ddd;
  border-right: 3px solid #149ddd;
  padding-right: 5px;
  margin-left: 8px;
  animation: blink 0.8s infinite;

  @keyframes blink {
    0% { border-color: #149ddd; }
    50% { border-color: transparent; }
    100% { border-color: #149ddd; }
  }
`;

export default function Hero() {
  const words = useMemo(
    () => ["Developer", "Designer", "Freelancer", "Photographer"],
    []
  );

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(120);

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(60);

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed]);

  return (
    <Wrapper>
      <Content>
        <Title className="animate__animated animate__fadeInDown">
          Alex Smith
        </Title>

        <SubTitle className="animate__animated animate__fadeInUp animate__delay-1s">
          I'm <Highlight>{text}</Highlight>
        </SubTitle>
      </Content>
    </Wrapper>
  );
}
