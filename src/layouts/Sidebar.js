import React from "react";
import img from "../assets/img/pr1.jpg";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaFileAlt,
  FaImage,
  FaServer,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Fade, Slide } from "react-awesome-reveal";


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(180deg, #0b1220 0%, #0a0f1a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;

  @media (max-width: 992px) {
    width: 260px;
  }
`;

const ProfilePhoto = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  padding: 8px;
  background: #1f2937;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  color: white;
  margin-bottom: 15px;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
`;

const IconBox = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  font-size: 18px;
  transition: 0.3s ease;

  &:hover {
    background: #149ddd;
    color: white;
    transform: translateY(-3px);
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #cbd5e1;
  padding: 12px 10px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  transition: 0.25s ease;
  opacity: 0.7;

  svg {
    font-size: 18px;
    min-width: 20px;
  }

  &:hover {
    opacity: 1;
    svg {
      color: #149ddd;
    }
  }
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <Fade delay={1000} duration={1500}>
        <ProfilePhoto>
          <img src={img} alt="profile" />
        </ProfilePhoto>
      </Fade>

      <Fade delay={1000} duration={900}>
        <Title>Alex Smith</Title>
      </Fade>

      <Fade delay={1200} duration={1000}>
        <SocialWrapper>
          <IconBox href="#">
            <FaXTwitter />
          </IconBox>
          <IconBox href="#">
            <FaFacebookF />
          </IconBox>
          <IconBox href="#">
            <FaInstagram />
          </IconBox>
          <IconBox href="#">
            <FaSkype />
          </IconBox>
          <IconBox href="#">
            <FaLinkedinIn />
          </IconBox>
        </SocialWrapper>
      </Fade>

      <MenuWrapper>
        <Slide direction="left" cascade damping={0.15} delay={1400}>
          <MenuItem href="#">
            <FaHome /> Home
          </MenuItem>
          <MenuItem href="#">
            <FaUser /> About
          </MenuItem>
          <MenuItem href="#">
            <FaFileAlt /> Resume
          </MenuItem>
          <MenuItem href="#">
            <FaImage /> Portfolio
          </MenuItem>
          <MenuItem href="#">
            <FaServer /> Services
          </MenuItem>
          <MenuItem href="#">
            <FaEnvelope /> Contact
          </MenuItem>
        </Slide>
      </MenuWrapper>
    </Wrapper>
  );
}
