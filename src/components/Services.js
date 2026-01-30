import React from "react";
import styled from "styled-components";
import {
  FaBriefcase,
  FaClipboardCheck,
  FaChartBar,
  FaBinoculars,
  FaSun,
  FaCalendarAlt,
} from "react-icons/fa";
import SectionTop from "../reusables/SectionTop";
import { Fade } from "react-awesome-reveal";

const Wrapper = styled.section`
  padding: 80px 20px;
`;

const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 25px;
  border-radius: 10px;
  background: #fff;
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover h4 {
    color: #149ddd;
  }

  &:hover div:first-child {
    background: #149ddd;
    color: #fff;
  }
`;

const IconWrap = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #149ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #149ddd;
  transition: 0.35s;
`;

const Content = styled.div``;

const Title = styled.h4`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  transition: 0.3s;
`;

const Text = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.6;
  font-size: 14px;
`;

export default function Services() {
  const services = [
    {
      icon: <FaBriefcase />,
      title: "Lorem Ipsum",
      text:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Dolor Sitema",
      text:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: <FaChartBar />,
      title: "Sed ut perspiciatis",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icon: <FaBinoculars />,
      title: "Magni Dolores",
      text:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      icon: <FaSun />,
      title: "Nemo Enim",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Eiusmod Tempor",
      text:
        "Et harum quidem rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi",
    },
  ];

  return (
    <Wrapper>
      <SectionTop
        title="Services"
        subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />

      <Grid>
        {services.map((service, index) => (
          <Fade
            key={index}
            direction="up"
            delay={index * 120}
            triggerOnce
          >
            <Card>
              <IconWrap>{service.icon}</IconWrap>
              <Content>
                <Title>{service.title}</Title>
                <Text>{service.text}</Text>
              </Content>
            </Card>
          </Fade>
        ))}
      </Grid>
    </Wrapper>
  );
}
