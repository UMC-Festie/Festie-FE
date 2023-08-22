import WriteInfo from "../components/WriteInfo";
import { Title, InputBox } from "../components/WriteTitleBody";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import { useState, useEffect } from "react";
import axios from "axios";
import image1 from "../assets/festie_logo.png";
export default function TogetherWrite() {
  const userToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0amd1czk5NjZAbmF2ZXIuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2OTI1MjIyODEsImV4cCI6MTY5MzEyNzA4MX0.xBa3QwerTHfhUKpQT1ixA5l-W5Hzsb44O4ocXbDQOcw";

  const dataToSend = {
    festivalId: "1",
    boardType: "정보공유",
    festivalTitle: "워터밤 서울",
    festivalType: 1,
    togetherDate: "2023-07-09",
    togetherTime: "17:30",
    category: 1,
    region: "서울",
    title: "워터밤 같이 갈 사람!!!",
    content: "가서 맘껏 즐기다 올 사람 구해요",
    target: "20대 중반 여성",
    message: "카카오톡 오픈 채팅방 xxx으로 들어와주세요",
  };

  // 이미지 파일
  const imageFile = image1; // 여기에 이미지 파일 변수를 할당

  const formData = new FormData();
  formData.append("thumbnail", imageFile);
  formData.append("data", JSON.stringify(dataToSend));

  axios
    .post("/api/together", formData, {
      headers: {
        "X-AUTH-TOKEN": userToken,
        "Content-Type": "multipart/form-data", // 이미지와 JSON 데이터를 함께 보내므로 Content-Type을 multipart/form-data로 설정
      },
    })
    .then((response) => {
      console.log("글 작성 완료:", response.data);
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });

  return (
    <WriteWrap>
      <WriteWrapBox>
        <WriteInfo></WriteInfo>
        <WriteBox>
          <Title>제목</Title>
          <InputBox
            placeholder="글제목을 입력해주세요."
            name="title"
            value={formData.title}
          ></InputBox>
          <Title>설명</Title>
          <TextAreaWrap>
            <TextAreaBox
              placeholder="같이 갈 공연 및 축제에 대한 정보를 예비 Bestie가 볼 수 있게 설명을 입력해주세요."
              height="400px"
              name="content"
              value={formData.content}
            ></TextAreaBox>
          </TextAreaWrap>
          <Title>선호대상</Title>
          <TextAreaWrap>
            <TextAreaBox
              placeholder="선호하는 Bestie의 특징을 입력해주세요."
              name="target"
              value={formData.target}
            ></TextAreaBox>
          </TextAreaWrap>
          <Title>매칭 메세지</Title>
          <TextAreaWrap>
            <TextAreaBox
              placeholder="매칭된 Bestie에게만 보여질 메세지에요.
Bestie와 원활하게 연락할 수 있게 연락처, 카카오톡 오픈채팅방 링크 등을 남겨주세요!"
              name="message"
              value={formData.message}
            ></TextAreaBox>
          </TextAreaWrap>
        </WriteBox>
        <ButtonWrap>
          <SubmitButton></SubmitButton>
        </ButtonWrap>
      </WriteWrapBox>
    </WriteWrap>
  );
}
const WriteWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const WriteWrapBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 1410px;
`;
const WriteBox = styled.div`
  border: 1px solid var(--festie-gray-200, #e8e8e8);
  border-radius: 20px;
  margin-top: 94px;
  margin-right: 90px;
  padding: 0px 32px 30px 32px;
`;
const TextAreaWrap = styled.div`
  width: 751px;
  padding: 19px 20px;
  margin-top: 4px;
  border-radius: 10px;
  background: var(--festie-gray-100, #f5f5f5);
  border: none;
`;
const TextAreaBox = styled.textarea`
  width: 100%;
  height: ${(props) => props.height || "76px"};
  background-color: transparent;
  border: none;
  color: var(--festie-gray-650, #6f6f6f);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  outline: none;
  resize: none;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  margin-right: 20px;
`;
const AddImage = styled.div`
  width: 150px;
  height: 150px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 13px;

  margin-top: 4px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  color: var(--festie-gray-600, #949494);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;
