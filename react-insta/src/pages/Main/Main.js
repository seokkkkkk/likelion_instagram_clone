import styled from "styled-components";
import MainNav from "./components/MainNav";
import MainProfile from "./components/MainProfile";
import MainFooter from "./components/MainFooter";
import MainSection from "./components/MainSection";

const Main = () => {
    return (
        <MainContainer>
            <MainNav />
            <Divider />
            <MainProfile />
            <Divider />
            <MainSection />
            <Divider />
            <MainFooter />
        </MainContainer>
    );
};
export default Main;

const MainContainer = styled.body`
    overflow: hidden;
`;

const Divider = styled.hr`
    border: 1px solid gray;
    width: 100%;
`;
