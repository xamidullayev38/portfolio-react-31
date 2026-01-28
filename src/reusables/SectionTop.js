import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #173b6c;
  position: relative;
  display: inline-block;
  margin-bottom: 25px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 60px;
    height: 4px;
    background: #149ddd;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #444;
`;

export default function SectionTop({ title, subtitle }) {
  return (
    <Section>
      <Title> {title} </Title>
      <Description>{subtitle}</Description>
    </Section>
  );
}
