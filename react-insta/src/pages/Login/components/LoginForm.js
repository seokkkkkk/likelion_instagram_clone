import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();

    function validateEmail(email) {
        // 이메일 형식인지 확인하는 정규표현식
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        if (validateEmail(email) && password.length >= 7) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "test@test.com" && password === "1234567") {
            alert("정상적으로 로그인 되었습니다.");
            navigate("/");
        } else {
            alert("이메일 또는 비밀번호가 올바르지 않습니다.");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <form class="loginForm" onSubmit={handleSubmit}>
            <InputBox>
                <EmailInput
                    type="text"
                    class="email"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onInput={(e) => setEmail(e.target.value)}
                />
                <PwInput
                    type="password"
                    class="pw"
                    placeholder="비밀번호"
                    onInput={(e) => setPassword(e.target.value)}
                />
            </InputBox>
            <div class="buttonBox">
                <Button type="submit" disabled={isButtonDisabled}>
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
