import React from "react";
import styled from "styled-components";
import SectionTop from "../reusables/SectionTop";
import img1 from '../assets/img/p1.png';
import img2 from '../assets/img/p2.png';
import img3 from '../assets/img/p3.png';
import img4 from '../assets/img/p4.png';
import img5 from '../assets/img/p5.png';
import img6 from '../assets/img/p6.png';
import img7 from '../assets/img/p7.png';
import img8 from '../assets/img/p8.png';
import img9 from '../assets/img/p9.png';
import img10 from '../assets/img/p10.png';
import img11 from '../assets/img/p11.png';
import img12 from '../assets/img/p12.png';  


const Wrapper = styled.section`
  margin: 80px 20px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  color: #444;
  transition: 0.3s;

  &:hover {
    color: #149ddd;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(20, 157, 221, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.4s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const OverlayText = styled.h4`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;


export default function Projects() {
  const projects = [
    { id: 1, title: "App 1", img: img1 },
    { id: 2, title: "Product 1", img: img2 },
    { id: 3, title: "Branding 1", img: img3 },
    { id: 4, title: "Books 1", img: img4 },
    { id: 5, title: "App 2", img: img5 },
    { id: 6, title: "Product 2", img: img6 },
    { id: 7, title: "Branding 2", img: img7 },
    { id: 8, title: "Books 2", img: img8 },
    { id: 9, title: "App 3", img: img9 },
    { id: 10, title: "Product 3", img: img10 },
    { id: 11, title: "Branding 3", img: img11 },
    { id: 12, title: "Books 3", img: img12 },
  ];

  return (
    <Wrapper>
      <SectionTop
        title="Portfolio"
        subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />

      <Filters>
        <FilterBtn>ALL</FilterBtn>
        <FilterBtn>APP</FilterBtn>
        <FilterBtn>PRODUCT</FilterBtn>
        <FilterBtn>BRANDING</FilterBtn>
        <FilterBtn>BOOKS</FilterBtn>
      </Filters>

      <Grid>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardImage src={project.img} alt={project.title} />
            <Overlay>
              <OverlayText>{project.title}</OverlayText>
            </Overlay>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}
