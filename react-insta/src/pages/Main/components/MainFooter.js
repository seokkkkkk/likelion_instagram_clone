import homeIcon from "../../../images/home.png";
import uploadIcon from "../../../images/upload.png";
import searchIcon from "../../../images/search.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const MainFooter = () => {
    return (
        <FooterContainer>
            <img src={homeIcon} alt="home icon" width="40px" height="40px" />
            <StyledLink to="/imagePost">
                <img
                    src={uploadIcon}
                    alt="upload icon"
                    width="35px"
                    height="35px"
                />
            </StyledLink>
            <img
                src={searchIcon}
                alt="search icon"
                width="40px"
                height="40px"
            />
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0px;

    width: calc(100% - 800px);

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid gray;
`;

export default MainFooter;
