import styled from "styled-components";
import SignUpForm from "./components/SignUpForm";
import SignUpHeader from "./components/SignUpHeader";
import SignUpPolicy from "./components/SignUpPolicy";

const SignUp = () => {
    return (
        <SignContainer>
            <SignBox>
                <SignUpHeader />
                <SignUpForm />
                <SignUpPolicy />
            </SignBox>
        </SignContainer>
    );
};

const SignContainer = styled.body`
    width: 350px;
    margin: 100px auto 0;
    min-height: 500px;
    overflow: hidden;
`;

const SignBox = styled.div`
    border: 1px solid #dbdbdb;
    height: 442px;
    padding: 0 40px;
`;

export default SignUp;
