import WriteInfo from "../components/WriteInfo";
import plusIcon from "../assets/plus.svg";
import { Title, InputBox } from "../components/WriteTitleBody";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";

export default function TogetherWrite() {
  return (
    <WriteWrap>
      <WriteWrapBox>
        <WriteInfo></WriteInfo>
        <WriteBox>
          <Title>제목</Title>
          <InputBox placeholder="글제목을 입력해주세요."></InputBox>
          <Title>설명</Title>
          <TextAreaWrap>
            <TextAreaBox
              placeholder="같이 갈 공연 및 축제에 대한 정보를 예비 Bestie가 볼 수 있게 설명을 입력해주세요."
              height="202px"
            ></TextAreaBox>
            <AddImage>
              <IconImage src={plusIcon} alt="Plus Icon" />
              사진 추가하기
            </AddImage>
          </TextAreaWrap>
          <Title>선호대상</Title>
          <TextAreaWrap>
            <TextAreaBox placeholder="선호하는 Bestie의 특징을 입력해주세요."></TextAreaBox>
          </TextAreaWrap>
          <Title>매칭 메세지</Title>
          <TextAreaWrap>
            <TextAreaBox
              placeholder="매칭된 Bestie에게만 보여질 메세지에요.
Bestie와 원활하게 연락할 수 있게 연락처, 카카오톡 오픈채팅방 링크 등을 남겨주세요!"
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
  margin-top: 153px;
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
`;
const IconImage = styled.img`
  margin-bottom: 16px;
`;
