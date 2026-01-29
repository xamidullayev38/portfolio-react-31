import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
border-top: 2px solid lightgrey;
  width: 100%;
  padding: 20px 0px;
  background: #f4fafd;
`;
const Text = styled.p`
    font-size: 14px;
    text-align: center;
`;
const SubTitle = styled.p`
text-align: center;
    font-size: 12px;
    span{
        color: #21a2df;
    }

`


export default function Footer() {
  return <Wrapper>
    <Text>
        Copyright <b>iPortfolio</b> All Rights Reserved
    </Text>
    <SubTitle>Designed by <span> BootstrapMade</span></SubTitle>
  </Wrapper>;
}
