import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileImg from "../../../images/profile.png";
import arrow from "../../../images/arrow.png";

const ProfileEdit = () => {
    return (
        <ProfileEditContainer>
            <div className="editHeader">
                <div className="left">
                    <span className="save">
                        <StyledLink to="/">
                            <img
                                src={arrow}
                                alt="back button"
                                className="saveBtn"
                            />
                        </StyledLink>
                    </span>
                    <span className="editTitle">
                        <b>프로필 편집</b>
                    </span>
                </div>
            </div>
            <div className="pic">
                <ImageContainer>
                    <ProfileImage src={ProfileImg} alt="profile_image" />
                </ImageContainer>
                <div className="picEdit">사진 또는 아바타 수정</div>
            </div>
            <div className="txt">
                <div className="txtTitle">이름</div>
                <input className="txtEdit" type="text" name="name" />
                <div className="txtTitle">사용자 이름</div>
                <input className="txtEdit" type="text" name="username" />
                <div className="txtTitle">소개</div>
                <TxtArea className="txtEdit" name="bio" />
            </div>
        </ProfileEditContainer>
    );
};

const TxtArea = styled.textarea`
    font-family: "Pretendard-Regular";
    width: 100%;
    resize: none;
    font-size: 14px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid darkgray;
    &:focus {
        outline: none;
    }
`;
const ImageContainer = styled.div`
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
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const ProfileEditContainer = styled.div`
    margin: 0 200px;
    padding: 0;
    overflow: hiddenl;
    @media all and (max-width: 767px) {
        font-size: 80%;
    }
    padding: 20px 15px;

    .editHeader {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .saveBtn {
        width: 35px;
        height: 30px;
        margin-right: 70px;
    }

    .editTitle {
        font-size: 30px;
    }

    .pic {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0 30px 0;
    }

    .picEdit {
        color: #0095f6;
        font-size: 14px;
    }

    .txtTitle {
        color: gray;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .txtEdit {
        font-family: "Pretendard-Regular";
        width: 100%;
        font-size: 14px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border: none;
        border-bottom: 1px solid darkgray;
        &:focus {
            outline: none;
        }
    }
`;

export default ProfileEdit;
