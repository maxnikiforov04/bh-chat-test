import {Outlet} from "react-router-dom";
import styled from "styled-components";

export function GuestLayout() {

    return (
        <>
            <Outlet/>
        </>
    )
}
export function AuthLayout() {
    const Wrapper = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    return(
        <Wrapper>
            <Outlet/>
        </Wrapper>
    )
}