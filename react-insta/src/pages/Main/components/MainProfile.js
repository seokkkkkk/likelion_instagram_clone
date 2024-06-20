import styled from "styled-components";
import profileImg from "../../../images/profile.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const MainProfile = () => {
    const [profile, setProfile] = useState({
        name: "",
        nickname: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const memberId = localStorage.getItem("id");

        const fetchProfileInfo = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8080/insta/user/${memberId}/info`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProfile({
                    name: data.name,
                    nickname: data.nickname,
                });
            } catch (error) {
                console.error(
                    "프로필을 불러오는 데에 오류가 발생했습니다",
                    error
                );
            } finally {
                setLoading(false);
            }
        };
        fetchProfileInfo();
    }, []);

    return (
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
                        <div className="nickname">
                            <h3>
                                {loading ? "Loading...." : profile.nickname}
                            </h3>
                            {loading ? "Loading...." : profile.name}
                        </div>
                        <div className="editBtn">
                            <StyledLink to="/profileEdit">
                                Edit Profile
                            </StyledLink>
                        </div>
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
    );
};

const Profile = styled.div`
    @media all and (max-width: 767px) {
        font-size: 80%;
    }
    .editBtn {
        width: 100px;
        padding: 5px;
        text-align: center;
        background-color: lightgray;
        border-radius: 5px;
    }
    .editBtn:hover {
        cursor: pointer;
    }
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

export default MainProfile;
