import styled from "styled-components";

const SignUpPolicy = () => {
    return (
        <Policy>
            가입하면 Instagram의 <b>약관, 데이터 정책</b> 및 <b>쿠키 정책</b>에
            동의하게 됩니다.
        </Policy>
    );
};

const Policy = styled.div`
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
    color: gray;
`;

export default SignUpPolicy;
