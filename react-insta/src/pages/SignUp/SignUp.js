import styled from "styled-components";
import logo from "../../images/text_logo.png";

const SignContainer = styled.body`
    width: 350px;
    margin: 100px auto 0;
    min-height: 500px;
`;

const SignBox = styled.div`
    border: 1px solid #dbdbdb;
    height: 442px;
    padding: 0 40px;
`;

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

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 8px;
`;

const Button = styled.button`
    width: 100%;
    padding: 8px 0;
    border-radius: 4px;
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

const Policy = styled.div`
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
    color: gray;
`;
const SignUp = () => {
    return (
        <SignContainer>
            <SignBox>
                <Logo src={logo} alt="로고" class="logo" />
                <JoinText class="joinText">
                    친구들의 사진과 동영상을 보려면 가입하세요.
                </JoinText>
                <form class="joinForm">
                    <InputBox>
                        <Input
                            type="text"
                            class="email"
                            placeholder="휴대폰 번호 또는 이메일 주소"
                        />
                        <Input type="text" class="name" placeholder="성명" />
                        <Input
                            type="text"
                            class="nickname"
                            placeholder="사용자 이름"
                        />
                        <PwInput
                            type="password"
                            class="pw"
                            placeholder="비밀번호"
                        />
                    </InputBox>
                    <div class="buttonBox">
                        <Button type="submit" disabled>
                            가입
                        </Button>
                    </div>
                </form>
                <Policy>
                    가입하면 Instagram의 <b>약관, 데이터 정책</b> 및{" "}
                    <b>쿠키 정책</b>에 동의하게 됩니다.
                </Policy>
            </SignBox>
        </SignContainer>
    );
};
export default SignUp;
