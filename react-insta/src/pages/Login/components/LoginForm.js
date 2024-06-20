import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
    const baseURL = "http://127.0.0.1:8080";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseURL}/insta/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            console.log("응답 상태 코드:", response.status);

            const contentType = response.headers.get("content-type");
            console.log("응답 Content-Type:", contentType);

            if (contentType && contentType.indexOf("application/json") !== -1) {
                const responseData = await response.json();
                console.log("서버 응답:", responseData);

                if (response.status === 200) {
                    localStorage.setItem("id", responseData.id);
                    alert("로그인 성공!");
                    navigate(`/`);
                } else if (response.status === 400) {
                    // 잘못된 JSON 형식으로 body 보내기 (예: 콤마 누락)
                    // 필수 파라미터 누락(아이디 혹은 비밀번호 입력 안 하기)
                    alert("요청이 잘못되었습니다. 입력 데이터를 확인하세요.");
                } else if (response.status === 401) {
                    // 아이디나 비밀번호 틀렸을 경우
                    alert(
                        "로그인에 실패하였습니다. 아이디와 비밀번호를 확인하세요."
                    );
                } else {
                    alert(
                        "서버 오류가 발생하였습니다. 나중에 다시 시도하세요."
                    );
                }
            } else {
                const responseText = await response.text();
                console.log("서버 응답 (텍스트):", responseText);

                if (response.status === 401) {
                    alert(
                        "로그인에 실패하였습니다. 아이디와 비밀번호를 확인하세요."
                    );
                } else {
                    alert(
                        "서버 오류가 발생하였습니다. 나중에 다시 시도하세요."
                    );
                }
            }
        } catch (error) {
            console.error("서버 요청 오류:", error);
            alert("네트워크 오류가 발생하였습니다. 인터넷 연결을 확인하세요.");
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
