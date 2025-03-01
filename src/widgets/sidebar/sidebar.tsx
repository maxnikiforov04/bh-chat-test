import {styled} from "styled-components";
import logo from '/logo.svg'
export function Sidebar() {
    const SidebarWrapper = styled.aside`
        background: #121825;
        position: fixed;
        width: 20%;
        height: 97%;
        box-sizing: border-box;
        border-radius: 16px;
    `
    const ContentWrapper = styled.div`
        padding: 2rem;
    `
    const FlexWrapper = styled.div`
        display: flex;
        justify-content: space-between;
    `
    return(
        <SidebarWrapper>
            <ContentWrapper>
                <FlexWrapper>
                    <img src={logo} alt="logo"/>
                </FlexWrapper>
            </ContentWrapper>
        </SidebarWrapper>
    )
}