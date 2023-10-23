import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const Container = styled.div<ShowType>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: scale(${({ show }) => (show ? 1 : 0)}) translate(-50%, -50%);
  width: 1030px;
  box-shadow: 0 15px 30px 0 hsla(0, 0%, 0%, 0.2),
    0 5px 10px 0 hsla(0, 0%, 0%, 0.2);
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 101;
  background: white;
  color: black;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export const Overlay = styled.div<ShowType>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  transform: scale(${({ show }) => (show ? 1 : 0)});
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  backdrop-filter: blur(0.25rem);
`;