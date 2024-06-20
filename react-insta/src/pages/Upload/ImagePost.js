import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../images/arrow.png";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const ImagePostContainer = styled.div`
    @media all and (max-width: 767px) {
        font-size: 60%;
    }

    padding: 20px 15px;
    width: 95%;

    .postHeader {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .left {
        display: flex;
        align-items: center;
    }
    .cancelBtn {
        width: 35px;
        height: 30px;
        margin-right: 70px;
    }
    .postTitle {
        font-size: 30px;
    }
    .content {
        display: flex;
        width: 100%;
    }
    .view {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .viewImage {
        width: 600px;
        height: 600px;
        object-fit: cover;
        z-index: 1;
    }
    .deleteImageBtn {
        display: block;
        cursor: pointer;
        font-size: 45px;
        color: white;
        -webkit-text-stroke: 1px black;
        position: absolute;
        top: 0px;
        right: 10px;
        z-index: 9;
    }
    .caption {
        width: 40%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        margin-left: 20px;
    }
    .caption textarea {
        font-family: "Pretendard-Regular";
        width: 100%;
        height: 100%;
        padding: 10px;
        font-size: 18px;
        margin-bottom: 20px;
        border: none;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        resize: none;
        box-shadow: none;
        box-sizing: border-box;
    }
    .caption textarea:focus {
        outline: none;
    }
    .caption button {
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: white;
        width: 100%;
        padding: 10px;
        font-size: 18px;
        background-color: #0095f6;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.4s;
        text-align: center;
    }
    .caption button:disabled {
        background-color: #67b5fa;
        cursor: default;
    }
    .charCount {
        position: absolute;
        bottom: 70px;
        right: 10px;
        font-size: 16px;
        color: silver;
    }
`;

const StyledFileInput = styled.label`
    display: inline-block;
    padding: 10px 15px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    overflow: hidden;
    position: relative;

    input[type="file"] {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }

    /* WebKit browsers (Chrome, Safari, Edge) */
    input[type="file"]::-webkit-file-upload-button {
        visibility: hidden;
    }
`;

const ImagePost = () => {
    const [caption, setCaption] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [memberId, setMemberId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const memberId = localStorage.getItem("id");
        if (memberId) {
            setMemberId(memberId);
        }
    }, []);

    const handleChange = (event) => {
        const text = event.target.value;
        // 최대 글자수 제한
        if (text.length <= 255) {
            setCaption(text);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };

    const handleReselect = () => {
        setImagePreview(null);
        setSelectedFile(null);
    };

    const upload = async () => {
        try {
            if (!selectedFile) {
                alert("사진을 선택해주세요.");
                return;
            }

            const formData = new FormData();
            formData.append("image", selectedFile);
            formData.append("context", caption);
            formData.append("memberId", memberId);

            const response = await fetch("http://127.0.0.1:8080/insta/upload", {
                method: "POST",
                body: formData,
                headers: {
                    // "Content-Type" : "multipart/form-data",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const textResponse = await response.text();
            console.log("업로드 성공 - 게시글 id:", textResponse);
            alert("성공적으로 업로드 되었습니다!");
            navigate("/");
        } catch (error) {
            console.error("업로드 에러:", error);
            alert("업로드 중 오류가 발생했습니다.");
        }
    };

    return (
        <ImagePostContainer>
            <div className="postHeader">
                <div className="left">
                    <span className="cancel">
                        <StyledLink to="/">
                            <img
                                src={arrow}
                                alt="back button"
                                className="cancelBtn"
                            />
                        </StyledLink>
                    </span>
                    <span className="postTitle">
                        <b>새 게시물</b>
                    </span>
                </div>
            </div>
            <div className="content">
                <div className="view">
                    {imagePreview && (
                        <>
                            <img
                                src={imagePreview}
                                alt="uploaded"
                                className="viewImage"
                            />
                            <div
                                onClick={handleReselect}
                                className="deleteImageBtn"
                            >
                                ×
                            </div>
                        </>
                    )}
                    {!imagePreview && (
                        <StyledFileInput>
                            파일 선택
                            <input type="file" onChange={handleFileChange} />
                        </StyledFileInput>
                    )}
                </div>
                <div className="caption">
                    <textarea
                        name="caption"
                        placeholder="문구를 입력하세요..."
                        value={caption}
                        onChange={handleChange}
                        maxLength={255}
                    ></textarea>
                    <span className="charCount">{caption.length}/255</span>
                    <button
                        type="button"
                        onClick={upload}
                        disabled={caption.length === 0 || !selectedFile}
                    >
                        공유하기
                    </button>
                </div>
            </div>
        </ImagePostContainer>
    );
};

export default ImagePost;
