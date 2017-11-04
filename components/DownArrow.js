import React from 'react';
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const DownArrow = styled.h1`
  opacity: 0;
  animation: ${pulse} 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate;
  animation-delay: 5s;
`;

export default () => <DownArrow>▾</DownArrow>;
