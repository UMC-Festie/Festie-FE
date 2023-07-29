import WriteInfo from "../components/WriteInfo";
import Write from "../components/Write";
import styled from "styled-components";

export default function PerformanceWrite() {
  return (
    <WriteWrap>
      <WriteWrapBox>
        <WriteInfo></WriteInfo>
        <Write></Write>
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
