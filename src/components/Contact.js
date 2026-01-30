import styled from "styled-components";
import SectionTop from "../reusables/SectionTop";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const Wrapper = styled.section`
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const IconWrap = styled.div`
  background: #e7f1ff;
  color: #0d6efd;
  min-width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const InfoText = styled.div`
  h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
  p {
    margin: 5px 0 0;
    color: #555;
    font-size: 14px;
  }
`;

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Row = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 14px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`;

const Button = styled.button`
  align-self: center;
  margin-top: 10px;
  background: #0d6efd;
  color: white;
  border: none;
  padding: 12px 35px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0b5ed7;
  }
`;

export default function Contact() {
  return (
    <Wrapper>
      <Fade direction="up" triggerOnce={false} duration={1000}>
        <SectionTop
          title={"Contact"}
          subtitle={
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          }
        />
      </Fade>

      <Container>
        <Slide direction="left" triggerOnce={false} duration={1200}>
          <Info>
            <Fade cascade damping={0.2} triggerOnce={false}>
              <InfoBox>
                <IconWrap className="animate__animated animate__pulse animate__infinite animate__slower">
                  <FaMapMarkerAlt />
                </IconWrap>
                <InfoText>
                  <h4>Address</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </InfoText>
              </InfoBox>

              <InfoBox>
                <IconWrap className="animate__animated animate__pulse animate__infinite animate__slower">
                  <FaPhoneAlt />
                </IconWrap>
                <InfoText>
                  <h4>Call Us</h4>
                  <p>+1 5589 55488 55</p>
                </InfoText>
              </InfoBox>

              <InfoBox>
                <IconWrap className="animate__animated animate__pulse animate__infinite animate__slower">
                  <FaEnvelope />
                </IconWrap>
                <InfoText>
                  <h4>Email Us</h4>
                  <p>info@example.com</p>
                </InfoText>
              </InfoBox>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce={false}>
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Fade>
          </Info>
        </Slide>

        {/* RIGHT FORM SIDE */}
        <Slide direction="right" triggerOnce={false} duration={1200}>
          <Form className="animate__animated animate__fadeInUp">
            <Row>
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </Row>

            <Input type="text" placeholder="Subject" required />

            <TextArea rows="6" placeholder="Message" required />

            <Button
              type="submit"
              className="animate__animated animate__pulse animate__infinite animate__slow"
            >
              Send Message
            </Button>
          </Form>
        </Slide>
      </Container>
    </Wrapper>
  );
}
