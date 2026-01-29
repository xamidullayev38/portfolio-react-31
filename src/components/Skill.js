import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SectionTop from "../reusables/SectionTop";

const Section = styled.section`
  padding: 70px 40px;
  background: #f5f8fd;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 20px;
`;

const SkillTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #173b6c;
`;

const Bar = styled.div`
  width: 100%;
  height: 10px;
  background: #e4e9f2;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #149ddd;
  width: ${props => props.width}%;
  transition: width 1.6s ease-in-out;
`;

export default function Skills() {
  const sectionRef = useRef(null);
  const [startAnim, setStartAnim] = useState(false);

  const skillsLeft = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
  ];

  const skillsRight = [
    { name: "Vue", value: 80 },
    { name: "React", value: 85 },
    { name: "Photoshop", value: 55 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef}>
      <SectionTop
        title="Skills"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <SkillsGrid>
        <div>
          {skillsLeft.map((skill, index) => (
            <SkillItem key={index}>
              <SkillTop>
                <span>{skill.name}</span>
                <span>{startAnim ? skill.value : 0}%</span>
              </SkillTop>
              <Bar>
                <Progress width={startAnim ? skill.value : 0} />
              </Bar>
            </SkillItem>
          ))}
        </div>

        <div>
          {skillsRight.map((skill, index) => (
            <SkillItem key={index}>
              <SkillTop>
                <span>{skill.name}</span>
                <span>{startAnim ? skill.value : 0}%</span>
              </SkillTop>
              <Bar>
                <Progress width={startAnim ? skill.value : 0} />
              </Bar>
            </SkillItem>
          ))}
        </div>
      </SkillsGrid>
    </Section>
  );
}
