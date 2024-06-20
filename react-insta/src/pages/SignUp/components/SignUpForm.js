import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpForm = () => {
    const baseURL = "http://127.0.0.1:8080";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();

    function validateEmail(email) {
        // 이메일 형식인지 확인하는 정규표현식
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        if (
            validateEmail(email) &&
            name.length &&
            nickname &&
            password.length >= 7
        ) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, name, nickname, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseURL}/insta/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    nickname: nickname,
                }),
            });

            if (response.status === 201) {
                alert("회원가입 성공!");
                navigate(`/login`);
            } else if (response.status === 500) {
                alert("회원가입 실패!");
            } else if (response.status === 409) {
                alert("회원가입 실패!");
            } else {
                alert("회원가입 실패!");
            }
        } catch (error) {
            console.error("네트워크 오류:", error); // 네트워크 오류 등을 콘솔에 출력
            alert("회원가입 실패!");
        }
    };

    return (
        <form class="joinForm" onSubmit={handleSubmit}>
            <InputBox>
                <Input
                    type="text"
                    class="email"
                    placeholder="휴대폰 번호 또는 이메일 주소"
                    onInput={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    class="name"
                    placeholder="성명"
                    onInput={(e) => setName(e.target.value)}
                />
                <Input
                    type="text"
                    class="nickname"
                    placeholder="사용자 이름"
                    onInput={(e) => setNickname(e.target.value)}
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
