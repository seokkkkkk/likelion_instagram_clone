import styled from "styled-components";
import logo from "../../images/text_logo.png";
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

const InputBox = styled.div`
    margin-top: 30px;
`;

const Button = styled.button`
    width: 100%;
    padding: 8px 0;
    border-radius: 8px;
    background-color: #67b5fa;
    border: none;
    width: 100%;
    font-weight: bold;
    color: white;
    transition: background-color 0.4s;
    text-align: center;
    cursor: pointer;
    &:disabled {
        cursor: default;
    }
    &:not([disabled]) {
        background-color: #0095f6;
    }
`;

const Input = styled.input`
    display: block;
    border-radius: 4px;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: #fafafa;
    border: none;
    border: 1px solid #dfdfdf;
    &::placeholder {
        font-size: 12px;
        font-weight: 350;
    }
    &:focus {
        outline: none;
        border: 1px solid gray;
    }
`;

const PwInput = styled(Input)`
    margin-bottom: 12px;
`;

const EmailInput = styled(Input)`
    margin-bottom: 6px;
`;

const OrContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const OrLine = styled.hr`
    display: inline-block;
    width: 39%;
    border: 1px solid #dbdbdb;
    height: 0px;
`;

const OrText = styled.span`
    display: inline-block;
    margin: 3%;
    color: #757575;
    font-size: 13px;
    font-weight: bold;
`;

const SocialLogin = styled.div`
    margin: 22px 0 28px 0;
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: #385285;
    display: block;
    text-align: center;
    font-weight: bold;
`;

const ForgetPw = styled(SocialLink)`
    font-weight: normal;
    font-size: 12px;
`;

const JoinContainer = styled.div`
    border: 1px solid #dfdfdf;
    height: 63px;
    margin-top: 10px;
`;

const JoinText = styled.p`
    text-align: center;
    padding: 7px 0;
    font-size: 14px;
`;

const JoinLink = styled.a`
    margin-left: 4px;
    text-decoration: none;
    color: #0095f6;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const Login = () => {
    return (
        <SignContainer>
            <SignBox>
                <Logo src={logo} alt="로고" class="logo" />
                <form class="loginForm">
                    <InputBox>
                        <EmailInput
                            type="text"
                            class="email"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                        />
                        <PwInput
                            type="password"
                            class="pw"
                            placeholder="비밀번호"
                        />
                    </InputBox>
                    <div class="buttonBox">
                        <Button type="submit" disabled>
                            로그인
                        </Button>
                    </div>
                </form>
                <OrContainer>
                    <OrLine />
                    <OrText> 또는 </OrText>
                    <OrLine />
                </OrContainer>
                <SocialLogin>
                    <SocialLink href="#">Facebook으로 로그인</SocialLink>
                </SocialLogin>
                <div class="forgetPw">
                    <ForgetPw href="#">비밀번호를 잊으셨나요?</ForgetPw>
                </div>
            </SignBox>
            <JoinContainer>
                <JoinText>
                    계정이 없으신가요?{" "}
                    <JoinLink href="join.html">가입하기</JoinLink>
                </JoinText>
            </JoinContainer>
        </SignContainer>
    );
};
export default Login;
