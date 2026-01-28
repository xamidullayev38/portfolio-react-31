import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/img/hero-bg.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${img}) no-repeat center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #000;
    opacity: 0.35;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding-left: 40px;
`;

const Title = styled.h1`
  font-size: 72px;
  color: white;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 28px;
  color: white;
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
  const words = ["Developer", "Designer", "Freelancer", "Photographer"];

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
        <Title>Alex Smith</Title>
        <SubTitle>
          I'm <Highlight >{text}</Highlight>
        </SubTitle>
      </Content>
    </Wrapper>
  );
}
