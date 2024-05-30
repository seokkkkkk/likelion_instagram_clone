import styled from "styled-components";

const LoginOr = () => {
    return (
        <OrContainer>
            <OrLine />
            <OrText> 또는 </OrText>
            <OrLine />
        </OrContainer>
    );
};

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

export default LoginOr;
