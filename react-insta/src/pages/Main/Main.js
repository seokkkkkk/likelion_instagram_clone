import styled from "styled-components";
import instaIcon from "../../images/icon.png";
import logoutIcon from "../../images/logout.png";
import profileImg from "../../images/profile.png";
import post1 from "../../images/post1.JPG";
import post2 from "../../images/post2.JPG";
import post3 from "../../images/post3.JPG";
import homeIcon from "../../images/home.png";
import uploadIcon from "../../images/upload.png";
import searchIcon from "../../images/search.png";

const Main = () => {
    return (
        <MainContainer>
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

            <Divider />

            <header>
                <Profile>
                    <ProfileLeft>
                        <ProfileImageContainer>
                            <ProfileImage
                                src={profileImg}
                                alt="profile"
                                width="150px"
                                height="150px"
                            />
                        </ProfileImageContainer>
                    </ProfileLeft>
                    <div>
                        <div>
                            <div>
                                <h3>융석</h3>
                            </div>
                            <button type="button">Edit Profile</button>
                            <div>
                                <ProfileInfo>
                                    <li>서울과학기술대학교</li>
                                    <li>멋쟁이사자처럼 12기</li>
                                    <li>
                                        <UserLink
                                            href="https://www.instagram.com/yseokk/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            인스타그램
                                        </UserLink>
                                    </li>
                                </ProfileInfo>
                            </div>
                        </div>
                    </div>
                </Profile>
            </header>

            <Divider />

            <MainSection>
                <Number>
                    <span>
                        <b>3 </b>
                        posts
                    </span>
                    <span>
                        <b>30 </b>
                        followers
                    </span>
                    <span>
                        <b>56 </b>
                        following
                    </span>
                </Number>
                <Divider />
                <GridContainer>
                    <GridContent
                        src={post1}
                        alt="post1"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post2}
                        alt="post2"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post3}
                        alt="post3"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post1}
                        alt="post1"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post2}
                        alt="post2"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post3}
                        alt="post3"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post1}
                        alt="post1"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post2}
                        alt="post2"
                        width="300px"
                        height="300px"
                    />
                    <GridContent
                        src={post3}
                        alt="post3"
                        width="300px"
                        height="300px"
                    />
                </GridContainer>
            </MainSection>

            <Divider />

            <MainFooter>
                <img
                    src={homeIcon}
                    alt="home icon"
                    width="40px"
                    height="40px"
                />
                <img
                    src={uploadIcon}
                    alt="upload icon"
                    width="35px"
                    height="35px"
                />
                <img
                    src={searchIcon}
                    alt="search icon"
                    width="40px"
                    height="40px"
                />
            </MainFooter>
        </MainContainer>
    );
};
export default Main;

const MainContainer = styled.body`
    margin: 0 200px;
    overflow: hidden;
`;

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
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    gap: 5vw;
`;

const ProfileImageContainer = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled.img`
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
`;

const ProfileLeft = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileInfo = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

const UserLink = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
        color: blue;
    }
`;

const Divider = styled.hr`
    border: 1px solid gray;
    width: 100%;
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Number = styled.span`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid gray;
`;

const GridContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
`;

const GridContent = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const MainFooter = styled.footer`
    position: fixed;
    bottom: 0px;

    width: calc(100% - 400px);

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid gray;
`;
