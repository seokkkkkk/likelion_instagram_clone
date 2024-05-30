import styled from "styled-components";
import logo from "../../images/text_logo.png";
import LoginForm from "./components/LoginForm";
import LoginOr from "./components/LoginOr";
import JoinSection from "./components/JoinSection";
import SocialLogin from "./components/SocialLogin";

const Login = () => {
    return (
        <SignContainer>
            <SignBox>
                <Logo src={logo} alt="로고" class="logo" />
                <LoginForm />
                <LoginOr />
                <SocialLogin />
                <ForgetPw href="#">비밀번호를 잊으셨나요?</ForgetPw>
            </SignBox>
            <JoinSection />
        </SignContainer>
    );
};

const SignContainer = styled.div`
    width: 350px;
    margin: 100px auto 0;
    min-height: 500px;
`;

const SignBox = styled.div`
    border: 1px solid #dbdbdb;
    height: 402px;
    padding: 0 40px;
`;

const Logo = styled.img`
    width: 195px;
    margin: 30px auto 0;
    display: block;
`;

const ForgetPw = styled.a`
    text-decoration: none;
    color: #385285;
    display: block;
    text-align: center;
    font-weight: normal;
    font-size: 12px;
`;

export default Login;
