import React from "react";
import styled from "styled-components";
import { FaSmile, FaClipboardList, FaHeadset, FaUsers } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Section = styled.section`
  padding: 70px 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const IconWrap = styled.div`
  font-size: 42px;
  color: #149ddd;
  margin-top: 5px;
`;

const Number = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  color: #173b6c;
`;

const Text = styled.p`
  margin: 5px 0 0 0;
  color: #555;
  line-height: 1.4;

  span {
    font-weight: 700;
    color: #173b6c;
  }
`;



function Counter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();

    function animateCount() {
      const startTime = performance.now();

      function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <Section>
      <Grid>
        <Card>
          <IconWrap><FaSmile /></IconWrap>
          <div>
            
            <Number><Counter target={232} /></Number>
            <Text><span>Happy Clients</span> consequuntur quae</Text>
          </div>
        </Card>

        <Card>
          <IconWrap><FaClipboardList /></IconWrap>
          <div>
            <Number><Counter target={521} /></Number>
            <Text><span>Projects</span> adipisci atque cum quia aut</Text>
          </div>
        </Card>

        <Card>
          <IconWrap><FaHeadset /></IconWrap>
          <div>
            <Number><Counter target={1453} /></Number>
            <Text><span>Hours Of Support</span> aut commodi quaerat</Text>
          </div>
        </Card>

        <Card>
          <IconWrap><FaUsers /></IconWrap>
          <div>
            <Number><Counter target={32} /></Number>
            <Text><span>Hard Workers</span> rerum asperiores dolor</Text>
          </div>
        </Card>
      </Grid>
    </Section>
  );
}
