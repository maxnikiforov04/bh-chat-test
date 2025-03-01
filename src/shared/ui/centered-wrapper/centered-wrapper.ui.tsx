import {ReactNode} from "react";
import styled from "styled-components";

type WrapperProps = {
    children:ReactNode
}
export function CenteredWrapper(props:WrapperProps):ReactNode {
    const { children } = props;
    const Wrapper = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
}