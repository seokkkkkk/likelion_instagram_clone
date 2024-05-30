import styled from "styled-components";
import logo from "../../../images/text_logo.png";

const SignUpHeader = () => {
    return (
        <>
            <Logo src={logo} alt="로고" class="logo" />
            <JoinText class="joinText">
                친구들의 사진과 동영상을 보려면 가입하세요.
            </JoinText>
        </>
    );
};

const Logo = styled.img`
    width: 195px;
    margin: 30px auto 0;
    display: block;
`;

const JoinText = styled.div`
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: gray;
`;

export default SignUpHeader;
