import React from "react";
import { styled } from "styled-components";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: start;
  overflow: hidden;
`; 
const SidebarWrapper = styled.div`
  width: 20%;
  height: 100vh;
`;
const MainWrapper = styled.div`
  width: 80%;
  height: 100vh;
`;

export default function App() {
  return (
    <>
      <Wrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MainWrapper>
          <Main />
        </MainWrapper>
      </Wrapper>
    </>
  );
}
