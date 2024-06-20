import styled from "styled-components";
import post1 from "../../../images/post1.JPG";
import post2 from "../../../images/post2.JPG";
import post3 from "../../../images/post3.JPG";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const memberId = localStorage.getItem("id");
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8080/insta/${memberId}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error("로드 중 오류 발생", error);
                setError("로등 중 오류 발생");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const handleImageClick = (postId) => {
        const memberId = localStorage.getItem("id");
        navigate(`/insta/${memberId}/${postId}`);
    };

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
                {loading && <p>이미지를 로드 중입니다...</p>}
                {error && <p>{error}</p>}
                {images &&
                    images.length > 0 &&
                    images.map((image) => (
                        <GridContent
                            key={image.id}
                            src={`data:image/jpeg;base64,${image.image}`} // Base64 접두어와 이미지 데이터 결합
                            alt="인스타 피드 이미지"
                            onClick={() => handleImageClick(image.id)}
                        />
                    ))}
                {!loading && images && images.length === 0 && (
                    <p>표시할 이미지가 없습니다.</p>
                )}
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
    height: 75%;
    object-fit: cover; /* 이미지를 컨테이너에 맞게 잘라내기 */
    cursor: pointer; /* 포인터 커서로 변경하여 클릭 가능하게 만듦 */
`;

export default MainSection;
