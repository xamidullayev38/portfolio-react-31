import styled from "styled-components";
import SectionTop from "../reusables/SectionTop";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
      <SectionTop
        title={"Contact"}
        subtitle={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />

      <Container>
        <Info>
          <InfoBox>
            <IconWrap>
              <FaMapMarkerAlt />
            </IconWrap>
            <InfoText>
              <h4>Address</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </InfoText>
          </InfoBox>

          <InfoBox>
            <IconWrap>
              <FaPhoneAlt />
            </IconWrap>
            <InfoText>
              <h4>Call Us</h4>
              <p>+1 5589 55488 55</p>
            </InfoText>
          </InfoBox>

          <InfoBox>
            <IconWrap>
              <FaEnvelope />
            </IconWrap>
            <InfoText>
              <h4>Email Us</h4>
              <p>info@example.com</p>
            </InfoText>
          </InfoBox>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5046.67982833375!2d69.20225715677068!3d41.22670006668634!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae618fd6e20b9b%3A0xf99b9dffcbef9429!2s2-Bekat!5e0!3m2!1sen!2s!4v1769700312368!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Info>

        <Form>
          <Row>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
          </Row>

          <Input type="text" placeholder="Subject" required />

          <TextArea rows="6" placeholder="Message" required />

          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}
