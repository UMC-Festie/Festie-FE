import styled from "styled-components";

export default function SubmitButton() {
  return <StyledSubmitButton>완료</StyledSubmitButton>;
}

const StyledSubmitButton = styled.button`
  display: flex;
  width: 245px;
  height: 42px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  background-color: var(--festie-gray-400, #c8c8c8);
  border: none;
  margin: 30px 110px 0px 0px;
  color: var(--festie-white, #fff);
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
`;
