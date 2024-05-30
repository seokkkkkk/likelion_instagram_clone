import styled from "styled-components";
import post1 from "../../../images/post1.JPG";
import post2 from "../../../images/post2.JPG";
import post3 from "../../../images/post3.JPG";

const MainSection = () => {
    return (
        <SectionContainer>
            <Number>
                <span>
                    <b>3 </b>
                    posts
                </span>
                <span>
                    <b>30 </b>
                    followers
                </span>
                <span>
                    <b>56 </b>
                    following
                </span>
            </Number>
            <Divider />
            <GridContainer>
                <GridContent
                    src={post1}
                    alt="post1"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post2}
                    alt="post2"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post3}
                    alt="post3"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post1}
                    alt="post1"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post2}
                    alt="post2"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post3}
                    alt="post3"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post1}
                    alt="post1"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post2}
                    alt="post2"
                    width="300px"
                    height="300px"
                />
                <GridContent
                    src={post3}
                    alt="post3"
                    width="300px"
                    height="300px"
                />
            </GridContainer>
        </SectionContainer>
    );
};

const Divider = styled.hr`
    border: 1px solid gray;
    width: 100%;
`;

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Number = styled.span`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid gray;
`;

const GridContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
`;

const GridContent = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export default MainSection;
