import React from "react";
import styled from "styled-components";
import SectionTop from "../reusables/SectionTop";

const Section = styled.section`
  padding: 70px 40px;
  background: #ffffff;
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div``;

const Block = styled.div`
  margin-bottom: 40px;
`;

const BlockTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #173b6c;
`;

const Item = styled.div`
  position: relative;
  padding-left: 25px;
  margin-bottom: 25px;
  border-left: 2px solid #149ddd;
`;

const Dot = styled.div`
  position: absolute;
  left: -7px;
  top: 4px;
  width: 12px;
  height: 12px;
  background: #149ddd;
  border-radius: 50%;
`;

const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #050d18;
`;

const ItemSub = styled.p`
  font-style: italic;
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
`;

const ItemText = styled.p`
  font-size: 14px;
  color: #444;
  line-height: 1.6;
`;

const List = styled.ul`
  padding-left: 18px;
  margin: 0;

  li {
    font-size: 14px;
    margin-bottom: 8px;
    color: #444;
  }
`;

export default function Resume() {
  return (
    <Section>
      <SectionTop
        title="Resume"
        subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem."
      />

      <ResumeGrid>
        {/* LEFT COLUMN */}
        <Column>
          <Block>
            <BlockTitle>Summary</BlockTitle>
            <Item>
              <Dot />
              <ItemTitle>Brandon Johnson</ItemTitle>
              <ItemText>
                Innovative and deadline-driven Graphic Designer with 3+ years
                of experience designing and developing user-centered digital/print
                marketing material from initial concept to final polished deliverable.
              </ItemText>
              <List>
                <li>Portland par 127, Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </List>
            </Item>
          </Block>

          <Block>
            <BlockTitle>Education</BlockTitle>

            <Item>
              <Dot />
              <ItemTitle>Master of Fine Arts & Graphic Design</ItemTitle>
              <ItemSub>2015 - 2016 • Rochester Institute of Technology, NY</ItemSub>
              <ItemText>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit.
              </ItemText>
            </Item>

            <Item>
              <Dot />
              <ItemTitle>Bachelor of Fine Arts & Graphic Design</ItemTitle>
              <ItemSub>2010 - 2014 • Rochester Institute of Technology, NY</ItemSub>
              <ItemText>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis.
              </ItemText>
            </Item>
          </Block>
        </Column>

        {/* RIGHT COLUMN */}
        <Column>
          <Block>
            <BlockTitle>Professional Experience</BlockTitle>

            <Item>
              <Dot />
              <ItemTitle>Senior Graphic Design Specialist</ItemTitle>
              <ItemSub>2019 - Present • Experion, New York, NY</ItemSub>
              <List>
                <li>
                  Lead in the design, development, and implementation of graphic
                  and layout communication materials
                </li>
                <li>
                  Delegate tasks to 7 team members and provide project guidance
                </li>
                <li>
                  Supervise the assessment of materials to ensure design quality
                </li>
                <li>
                  Manage production budgets ranging from $2,000–$25,000
                </li>
              </List>
            </Item>

            <Item>
              <Dot />
              <ItemTitle>Graphic Design Specialist</ItemTitle>
              <ItemSub>2017 - 2018 • Stepping Stone Advertising, NY</ItemSub>
              <List>
                <li>
                  Developed marketing programs including logos, brochures, and ads
                </li>
                <li>
                  Managed up to 5 projects at once under pressure
                </li>
                <li>
                  Consulted clients on the most appropriate design solutions
                </li>
                <li>
                  Created 4+ presentations and proposals monthly
                </li>
              </List>
            </Item>
          </Block>
        </Column>
      </ResumeGrid>
    </Section>
  );
}
