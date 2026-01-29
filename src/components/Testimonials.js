import React from "react";
import styled from "styled-components";
import SectionTop from "../reusables/SectionTop";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled.section`
  padding: 80px 20px;
  background: #f8fbfd;

  .testimonial-swiper {
    padding-bottom: 60px;
  }

  .swiper-pagination-bullet {
    background: #149ddd;
    opacity: 0.4;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

const Card = styled.div`
  text-align: center;
  padding: 10px 20px 40px;
`;

const Bubble = styled.div`
  background: #fff;
  padding: 25px 20px;
  border-radius: 10px;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
`;

const Quote = styled.span`
  color: #149ddd;
  font-size: 28px;
  font-weight: bold;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-top: 25px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const Name = styled.h4`
  margin: 15px 0 5px 0;
  font-size: 18px;
  font-weight: 700;
`;

const Role = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
`;

export default function Testimonials() {
  const testimonials = [
    {
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
    },
    {
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
    },
    {
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "John Larson",
      role: "Entrepreneur",
    },
    {
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
    },
    {
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
    },
    {
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "John Larson",
      role: "Entrepreneur",
    },
  ];

  return (
    <Wrapper>
      <SectionTop
        title="Testimonials"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="testimonial-swiper"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        style={{ marginTop: "50px", paddingBottom: "50px" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Bubble>
                <Quote>“</Quote> {item.text} <Quote>”</Quote>
              </Bubble>
              <Avatar src={item.img} alt={item.name} loading="lazy" />
              <Name>{item.name}</Name>
              <Role>{item.role}</Role>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
