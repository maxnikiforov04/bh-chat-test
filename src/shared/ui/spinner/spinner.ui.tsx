import {ReactNode} from "react";
import styled, { keyframes } from "styled-components";

export function Spinner ():ReactNode{
    const spin = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;
    const Spinner = styled.div`
      width: 40px;
      height: 40px;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top-color: #3498db;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    `;
    return (
        <Spinner/>
    );
}
