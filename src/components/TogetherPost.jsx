import { useState } from "react";
import styled from "styled-components";

export default function TogetherPost() {
  const [title, setTitle] = useState('제목');
  const [requests, setRequests] = useState(12);
  const [views, setViews] = useState(320);
  const [writter, setWritter] = useState('작성자');
  const [date, setDate] = useState('2023.7.29');
  const [contents, setContents] = useState(`이상, 못할 밥을 끓는 찾아다녀도, 뿐이다. 든 놀이 그들은 때문이다. 못하다 더운지라 우리 하여도 그들은 그들에게 구하기 뿐이다. 인생을 곳으로 과실이 위하여 것은 석가는 열매를 뿐이다. 뼈 못하다 생의 않는 청춘 철환하였는가? 열매를 불어 수 곳이 같이, 대한 이것이다. 위하여서 불어 공자는 것이다.보라, 같이, 긴지라 이것이다. 인생에 산야에 일월과 때에, 만물은 얼마나 운다. 천자만홍이 풍부하게 우리의 광야에서 아니한 가는 기관과 창공에 얼음이 봄바람이다. 과실이 쓸쓸한 인생에 것은 부패뿐이다. 오아이스도 이상은 가슴이 것은 사막이다.\n

  그들을 우리 천하를 그들은 있는가? 우는 청춘의 되려니와, 같으며, 이상 반짝이는 속에 있는 황금시대다. 그들의 만물은 눈에 보이는 그들은 청춘은 피고, 우리 것이다. 이성은 광야에서 불어 끝까지 것은 불어 꽃이 얼음과 그러므로 이것이다. 피부가 날카로우나 구할 두손을 굳세게 사라지지 아니더면, 아름다우냐? 그들의 인생을 이 사막이다. 방황하였으며, 피어나기 가는 황금시대다. 그림자는 아름답고 인간의 평화스러운 가치를 크고 소담스러운 현저하게 피다. 인간이 피어나는 청춘에서만 생생하며, 힘있다. 창공에 속에서 영원히 가진 방지하는 철환하였는가?\n
  
  평화스러운 곧 만물은 있으랴? 그들의 인간에 인생을 지혜는 우리 앞이 풀이 안고, 있는가? 그것은 곧 발휘하기 힘있다. 그들은 군영과 인생에 가진 얼음이 이 끓는 눈이 구하기 것이다. 천하를 황금시대의 뛰노는 듣기만 칼이다. 만천하의 갑 대고, 사막이다. 물방아 불어 가지에 실로 바이며, 무엇을 힘있다. 피어나기 그와 창공에 하였으며, 심장은 인생의 할지라도 있는가? 인생에 피부가 든 풀이 돋고, 어디 청춘의 우리는 못하다 것이다.
  `);
  const [preferenceContents, setPreferenceContents] = useState(`이상, 못할 밥을 끓는 찾아다녀도, 뿐이다. 든 놀이 그들은 때문이다. 못하다 더운지라 우리 하여도 그들은 그들에게 구하기 뿐이다. 인생을 곳으로 과실이 위하여 것은 석가는 열매를 뿐이다. 뼈 못하다 생의 않는 청춘 철환하였는가?`);

    return (
        <>
          <PostBox>
            <PostHeader>
              <LeftWrap>
                <TitleWrap>
                  <Title>{title}</Title>
                </TitleWrap>
                <WriteInfoWrap>
                  <WritterWrap>
                    <Writter>{writter}</Writter>
                  </WritterWrap>
                  <DateWrap>
                    <Date>{date}</Date>
                  </DateWrap>
                </WriteInfoWrap>
              </LeftWrap>
              <RightWrap>
                <CountWrap>
                  <RequestsWrap>
                    <RequestsIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M14.1654 17.5V15.8333C14.1654 14.9493 13.8142 14.1014 13.1891 13.4763C12.5639 12.8512 11.7161 12.5 10.832 12.5H4.16536C3.28131 12.5 2.43346 12.8512 1.80834 13.4763C1.18322 14.1014 0.832031 14.9493 0.832031 15.8333V17.5" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5013 9.16667C9.34225 9.16667 10.8346 7.67428 10.8346 5.83333C10.8346 3.99238 9.34225 2.5 7.5013 2.5C5.66035 2.5 4.16797 3.99238 4.16797 5.83333C4.16797 7.67428 5.66035 9.16667 7.5013 9.16667Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.168 17.4991V15.8324C19.1674 15.0939 18.9216 14.3764 18.4691 13.7927C18.0166 13.209 17.3831 12.7921 16.668 12.6074" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.332 2.60742C14.049 2.79101 14.6846 3.20801 15.1384 3.79268C15.5922 4.37736 15.8386 5.09645 15.8386 5.83659C15.8386 6.57673 15.5922 7.29582 15.1384 7.8805C14.6846 8.46517 14.049 8.88217 13.332 9.06576" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </RequestsIcon>
                    <Requests>{requests}</Requests>
                  </RequestsWrap>
                  <ViewsWrap>
                    <ViewsIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M0.832031 10.0007C0.832031 10.0007 4.16536 3.33398 9.9987 3.33398C15.832 3.33398 19.1654 10.0007 19.1654 10.0007C19.1654 10.0007 15.832 16.6673 9.9987 16.6673C4.16536 16.6673 0.832031 10.0007 0.832031 10.0007Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </ViewsIcon>
                    <Views>{views}</Views>
                  </ViewsWrap>
                </CountWrap>
                <ButtonWrap>
                  <EditButtonWrap>
                    <EditButton>수정</EditButton>
                  </EditButtonWrap>
                  <DeleteButtonWrap>
                    <DeleteButton>삭제</DeleteButton>
                  </DeleteButtonWrap>
                </ButtonWrap>
              </RightWrap>
            </PostHeader>
            <SeparationWrap>
              <svg xmlns="http://www.w3.org/2000/svg" width="751" height="2" viewBox="0 0 751 2" fill="none">
                <path d="M0 1H751" stroke="#E8E8E8"/>
              </svg>
            </SeparationWrap>
            <ContentsWrap>
              <Contents>{contents}</Contents>
            </ContentsWrap>
            <SeparationWrap>
              <svg xmlns="http://www.w3.org/2000/svg" width="751" height="2" viewBox="0 0 751 2" fill="none">
                <path d="M0 1H751" stroke="#E8E8E8"/>
              </svg>
            </SeparationWrap>
            <PreferenceBox>
              <PreferenceTitleWrap>
                <PreferenceTitle>{writter}의 Bestie 선호 대상</PreferenceTitle>
              </PreferenceTitleWrap>
              <PreferenceContentWrp>
                <PreferenceContent>{preferenceContents}</PreferenceContent>
              </PreferenceContentWrp>
            </PreferenceBox>
          </PostBox>
        </>
    )
}

const PostBox = styled.div`
  /* margin: 20px; */
  display: flex;
  flex-direction: column;
  width: 751px;
  height: auto;
  padding: 0 32px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--festie-gray-200, #E8E8E8);
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`;

const LeftWrap = styled.div`

`;

const TitleWrap = styled.div`
  /* border: 1px solid green; */
  width: auto;
  height: 42px;
`;

const Title = styled.span`
  color: var(--festie-gray-900, #252525);
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.3px;
`;

const WriteInfoWrap = styled.div`
  display: flex;
  margin-top: 16px;
`;

const WritterWrap = styled.div`
  /* border: 1px solid green; */
  width: auto;
  height: 20px;
  margin-right: 24px;
`;

const Writter = styled.span`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const DateWrap = styled.div`
  /* border: 1px solid green; */
  width: auto;
  height: 20px;
`;

const Date = styled.span`
  color: var(--festie-gray-500, #B7B7B7);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RequestsWrap = styled.div`
  display: inline-flex;
  align-items: center;
  width: auto;
  height: 20px;
  gap: 8px;
  margin-right: 16px;
`;

const RequestsIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const Requests = styled.div`
  color: var(--festie-gray-500, #B7B7B7);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const ViewsWrap = styled.div`
  /* border: 1px solid red; */
  display: inline-flex;
  align-items: center;
  width: auto;
  height: 20px;
  gap: 8px;
`;

const ViewsIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const Views = styled.div`
  color: var(--festie-gray-500, #B7B7B7);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  /* border: 1px solid blue; */
`;

const EditButtonWrap = styled.div`
  margin-right: 8px;
`;

const EditButton = styled.button`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 21px;
  border: 1px solid var(--festie-gray-500, #B7B7B7);
  background: #FFF;

  &:hover {
    cursor: pointer;
  }
`;

const DeleteButtonWrap = styled.div`
`;

const DeleteButton = styled.button`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 21px;
  border: 1px solid var(--festie-gray-500, #B7B7B7);
  background: #FFF;
  
  &:hover {
    cursor: pointer;
  }
`;

const SeparationWrap = styled.div`
  margin-top: 10px;
  width: 751px;
  height: 0px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: var(--festie-gray-200, #E8E8E8);  
`;

const ContentsWrap = styled.div`
  display: flex;
  width: 751px;
  flex-direction: column;
  margin-top: 46px;
  margin-bottom: 18px;
  flex-shrink: 0;
  /* border: 1px solid pink; */
`;

const Contents = styled.span`
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  white-space: pre-line;
`;

const PreferenceBox = styled.div`
  margin-top: 28px;
  margin-bottom: 32px;
`;

const PreferenceTitleWrap = styled.div`
  width: auto;
  height: 20px;
  margin-bottom: 14px;
`;

const PreferenceTitle = styled.span`
  color: var(--festie-primary-orange, #FF7A00);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const PreferenceContentWrp = styled.span`
  display: flex;
  width: 751px;
  flex-direction: column;
  flex-shrink: 0;
`;

const PreferenceContent = styled.span`
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
