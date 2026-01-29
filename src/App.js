import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
import { FaBars } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

/* SIDEBAR */
const SidebarWrapper = styled.div`
  width: 20%;
  height: 100vh;

  @media (max-width: 992px) {
    position: fixed;
    left: ${({ open }) => (open ? "0" : "-100%")};
    top: 0;
    width: 260px;
    z-index: 1000;
    transition: 0.3s ease;
  }
`;

/* MAIN */
const MainWrapper = styled.div`
  width: 80%;
  height: 100vh;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const MobileBar = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #0b1220;
    color: white;
  }
`;

const MenuBtn = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 22px;
`;

/* OVERLAY */
const Overlay = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 900;
  }
`;

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <SidebarWrapper open={open}>
          <Sidebar />
        </SidebarWrapper>

        <MainWrapper>
          <MobileBar>
            <MenuBtn onClick={() => setOpen(true)}>
              <FaBars />
            </MenuBtn>
            <span>Menu</span>
          </MobileBar>

          <Main />
        </MainWrapper>
      </Wrapper>

      <Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
}
