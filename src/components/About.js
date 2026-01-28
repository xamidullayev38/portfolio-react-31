import React from "react";
import SectionTop from "../reusables/SectionTop";
import styled from "styled-components";
import img from "../assets/img/about.png";

const title = "About";
const subtitle =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";

const Wrappper = styled.section`
  margin: 80px 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  color: black;
  font-weight: bold;
  letter-spacing: 1.5%;
`;
const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: black;
`;
const Image = styled.img`
  max-width: 383px;
  max-height: 383px;
`;
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 40px;
  margin: 10px 0 5px 0;
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

export default function About() {
  const info = [
    {
      id: 1,
      name: "Birthday",
      content: "1 May 1995",
    },
    {
      id: 2,
      name: "Website",
      content: "www.example.com",
    },
    {
      id: 3,
      name: "Phone",
      content: "+123 456 7890",
    },
    {
      id: 4,
      name: "City",
      content: "New York, USA",
    },
    {
      id: 5,
      name: "Age",
      content: "30",
    },
    {
      id: 6,
      name: "Degree",
      content: "Master",
    },
    {
      id: 7,
      name: "Email",
      content: "email@example.com",
    },
    {
      id: 8,
      name: "Freelance",
      content: "Available",
    },
  ];

  return (
    <Wrappper>
      <SectionTop title={title} subtitle={subtitle} />
      <div className="d-flex align-items-center gap-4 justify-content-between">
        <Image src={img} alt="profile img" />
        <div className="d-flex flex-column gap-3">
          <Title>UI/UX Designer & Web Developer.</Title>
          <SubTitle>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
          </SubTitle>

          <InfoGrid>
            {info.map((item) => {
              return (
                <InfoItem key={item.id}>
                  <Arrow>▷</Arrow>
                  <Label>{item.name} :</Label>
                  <Value> {item.content} </Value>
                </InfoItem>
              );
            })}

          </InfoGrid>

          <SubTitle>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </SubTitle>
        </div>
      </div>
    </Wrappper>
  );
}
