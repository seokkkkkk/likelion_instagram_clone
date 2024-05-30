import styled from "styled-components";

const SocialLogin = () => {
    return (
        <SocialLoginContainer>
            <SocialLink href="#">Facebook으로 로그인</SocialLink>
        </SocialLoginContainer>
    );
};

const SocialLoginContainer = styled.div`
    margin: 22px 0 28px 0;
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: #385285;
    display: block;
    text-align: center;
    font-weight: bold;
`;

export default SocialLogin;
