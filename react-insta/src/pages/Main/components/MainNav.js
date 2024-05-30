import styled from "styled-components";
import instaIcon from "../../../images/icon.png";
import logoutIcon from "../../../images/logout.png";

const MainNav = () => {
    return (
        <nav>
            <NavContainer>
                <NavContent>
                    <img
                        src={instaIcon}
                        alt="instagram icon"
                        width="40px"
                        height="40px"
                    />
                </NavContent>
                <NavContent>
                    <Title>YUNSEOK'S GRAM</Title>
                </NavContent>
                <LogoutIcon>
                    <img
                        src={logoutIcon}
                        alt="logout icon"
                        width="40px"
                        height="40px"
                    />
                </LogoutIcon>
            </NavContainer>
        </nav>
    );
};

const NavContainer = styled.div`
    display: flex;
    margin: 10px 30px;
`;

const NavContent = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    padding-left: 20px;
    flex: 2;
`;

const LogoutIcon = styled(NavContent)`
    flex: 1;
    justify-content: flex-end;
`;

export default MainNav;
