import { useState } from "react";
import styled from "styled-components";
import plusIcon from "../assets/plus.svg";
import SubmitButton from "../components/SubmitButton";

export default function Write() {
  return (
    <WriteWrapBox>
      <WriteBox>
        <ManagerInquiryWrap>
          <ManagerWrap>
            <Title>관리자</Title>
            <InputBox placeholder="관리자를 입력해주세요"></InputBox>
          </ManagerWrap>
          <ManagerWrap>
            <Title>문의처</Title>
            <InputBox placeholder="문의처를 입력해주세요"></InputBox>
          </ManagerWrap>
        </ManagerInquiryWrap>
        <Title>상세정보</Title>
        <TextAreaBox placeholder="Bestie들에게 알려줄 축제에 대한 설명을 입력해주세요"></TextAreaBox>
        <Title>이미지</Title>
        <AddImage for="file">
          <IconImage src={plusIcon} alt="Plus Icon" />
          사진 추가하기
          <AddImageInput type="file" name="file" id="file"></AddImageInput>
        </AddImage>
      </WriteBox>
      <ButtonWrap>
        <SubmitButton></SubmitButton>
      </ButtonWrap>
    </WriteWrapBox>
  );
}

const WriteWrapBox = styled.div`
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 947px;
`;
const WriteBox = styled.div`
  border: 1px solid var(--festie-gray-200, #e8e8e8);
  border-radius: 20px;
  margin-top: 94px;
  margin-right: 90px;
  padding: 0px 32px 30px 32px;
`;

const ManagerInquiryWrap = styled.div`
  display: flex;
`;

const ManagerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`;

const Title = styled.div`
  width: 751px;
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  margin-top: 30px;
`;
const InputBox = styled.input`
  width: 340px;
  height: 22px;
  padding: 19px 20px;
  margin-top: 4px;
  border-radius: 10px;
  background: var(--festie-gray-100, #f5f5f5);
  border: none;

  color: var(--festie-gray-650, #6f6f6f);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  outline: none;
`;
const TextAreaBox = styled.textarea`
  width: 751px;
  height: 582px;
  padding: 19px 20px;
  margin-top: 4px;
  border-radius: 10px;
  background: var(--festie-gray-100, #f5f5f5);
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

const AddImage = styled.label`
  width: 170px;
  height: 170px;
  margin-top: 4px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--festie-gray-400, #c8c8c8);
  background: #fff;

  color: var(--festie-gray-600, #949494);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const AddImageInput = styled.input`
  display: none;
`;

const IconImage = styled.img`
  margin-bottom: 23px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: right;
  width: 970px;
`;
