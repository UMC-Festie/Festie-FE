import WriteInfo from "../components/WriteInfo";
import Write from "../components/Write";
import styled from "styled-components";

export default function PerformanceWrite() {
  return (
    <PerformanceWriteWrap>
      <WriteInfo></WriteInfo>
      <Write></Write>
    </PerformanceWriteWrap>
  );
}

const PerformanceWriteWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
