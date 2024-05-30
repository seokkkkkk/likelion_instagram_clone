import styled from "styled-components";

const LoginForm = () => {
    return (
        <form class="loginForm">
            <InputBox>
                <EmailInput
                    type="text"
                    class="email"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <PwInput type="password" class="pw" placeholder="비밀번호" />
            </InputBox>
            <div class="buttonBox">
                <Button type="submit" disabled>
                    로그인
                </Button>
            </div>
        </form>
    );
};

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

export default LoginForm;
