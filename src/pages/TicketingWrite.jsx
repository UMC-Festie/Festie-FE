import plusIcon from "../assets/plus.svg";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import searchIcon from "../assets/search.svg";

import {
  InfoBox,
  InputBox,
  SearchBox,
  SearchInput,
  PlusIcon,
  AddImage,
} from "../components/WriteInfo";

export default function TicketingWrite() {
  return (
    <WriteWrap>
      <WriteWrapBox>
        <InfoBox>
          <SearchBox>
            <SearchInput placeholder="공연/축제 검색"></SearchInput>
            <IconImage src={searchIcon} alt="Search Icon" />
          </SearchBox>
          <InputBox>
            <AddImage>
              <PlusIcon src={plusIcon} alt="Plus Icon" />
              공연 정보 입력하기
            </AddImage>
          </InputBox>
        </InfoBox>
        <WriteBox>
          <Title>제목</Title>
          <InputTitleBox placeholder="글제목을 입력해주세요"></InputTitleBox>
          <Title>상세정보</Title>
          <TextAreaWrap>
            <TextAreaBox placeholder="Bestie들에게 소개할 티켓팅에 대한 정보를 입력해주세요"></TextAreaBox>
            <AddImageBox>
              <IconImage src={plusIcon} alt="Plus Icon" />
              사진 추가하기
              <AddImageInput type="file" name="file" id="file"></AddImageInput>
            </AddImageBox>
          </TextAreaWrap>
        </WriteBox>
        <ButtonWrap>
          <SubmitButton></SubmitButton>
        </ButtonWrap>
      </WriteWrapBox>
    </WriteWrap>
  );
}

const Title = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  margin-top: 30px;
`;
const InputTitleBox = styled.input`
  width: 751px;
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
  height: 582px;
  padding: 19px 20px;
  margin-top: 4px;
  border-radius: 10px;
  background: var(--festie-gray-100, #f5f5f5);
  border: none;
`;
const TextAreaBox = styled.textarea`
  width: 100%;
  height: 72%;
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
const AddImageBox = styled.label`
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
const AddImageInput = styled.input`
  display: none;
`;
const IconImage = styled.img``;
