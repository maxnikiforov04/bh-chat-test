import {Sidebar} from "@widgets/sidebar";
import styled from "styled-components";

export const MainPage = () => {
    const ContentWrapper = styled.section`
        height: 100%;
        width: 100%;
        margin: 1rem;
    `
    return (
        <ContentWrapper>
            <Sidebar/>
        </ContentWrapper>
    );
};
