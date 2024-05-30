import styled from "styled-components";

const SignUpForm = () => {
    return (
        <form class="joinForm">
            <InputBox>
                <Input
                    type="text"
                    class="email"
                    placeholder="휴대폰 번호 또는 이메일 주소"
                />
                <Input type="text" class="name" placeholder="성명" />
                <Input type="text" class="nickname" placeholder="사용자 이름" />
                <PwInput type="password" class="pw" placeholder="비밀번호" />
            </InputBox>
            <div class="buttonBox">
                <Button type="submit" disabled>
                    가입
                </Button>
            </div>
        </form>
    );
};

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

export default SignUpForm;
