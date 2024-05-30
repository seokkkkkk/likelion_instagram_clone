import styled from "styled-components";

const JoinSection = () => {
    return (
        <JoinContainer>
            <JoinText>
                계정이 없으신가요?{" "}
                <JoinLink href="join.html">가입하기</JoinLink>
            </JoinText>
        </JoinContainer>
    );
};

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

export default JoinSection;
