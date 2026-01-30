import React from "react";
import SectionTop from "../reusables/SectionTop";
import styled from "styled-components";
import img from "../assets/img/about.png";
import { Fade, Slide } from "react-awesome-reveal";

const title = "About";
const subtitle =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";

const Wrappper = styled.section`
  margin: 80px 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 992px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 383px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 280px;
  }

  @media (max-width: 480px) {
    max-width: 220px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 40px;
  margin: 10px 0 5px 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const InfoItem = styled.div`
  font-size: 16px;
  color: #222;
  display: flex;
  align-items: center;
`;

const Arrow = styled.span`
  color: #149ddd;
  font-weight: bold;
  margin-right: 8px;
`;

const Label = styled.span`
  font-weight: 700;
  margin-right: 6px;
`;

const Value = styled.span`
  color: #444;
`;

const TextContent = styled.div`
  flex: 1;
`;

export default function About() {
  const info = [
    { id: 1, name: "Birthday", content: "1 May 1995" },
    { id: 2, name: "Website", content: "www.example.com" },
    { id: 3, name: "Phone", content: "+123 456 7890" },
    { id: 4, name: "City", content: "New York, USA" },
    { id: 5, name: "Age", content: "30" },
    { id: 6, name: "Degree", content: "Master" },
    { id: 7, name: "Email", content: "email@example.com" },
    { id: 8, name: "Freelance", content: "Available" },
  ];

  return (
    <Wrappper>
      <SectionTop title={title} subtitle={subtitle} />

      <Content>
        <Slide duration={1500} direction="left" triggerOnce>
          <Image src={img} alt="profile img" />
        </Slide>

        <Slide duration={1500} direction="right" triggerOnce>
          <TextContent>
            <Fade direction="down" triggerOnce>
              <Title>UI/UX Designer & Web Developer.</Title>
            </Fade>

            <Fade triggerOnce delay={200}>
              <SubTitle>
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </i>
              </SubTitle>
            </Fade>

            <InfoGrid>
              {info.map((item, index) => (
                <Fade key={item.id} delay={index * 120} triggerOnce>
                  <InfoItem>
                    <Arrow>▷</Arrow>
                    <Label>{item.name} :</Label>
                    <Value>{item.content}</Value>
                  </InfoItem>
                </Fade>
              ))}
            </InfoGrid>

            <Fade triggerOnce delay={400}>
              <SubTitle>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero...
              </SubTitle>
            </Fade>
          </TextContent>
        </Slide>
      </Content>
    </Wrappper>
  );
}
