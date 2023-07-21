import { useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/search.svg";
import selectArrow from "../assets/SelectArrow.svg";
import plusIcon from "../assets/plus.svg";

export default function WriteInfo() {
  return (
    <InfoBox>
      <SearchBox>
        <SearchInput placeholder="공연/축제 검색"></SearchInput>
        <IconImage src={searchIcon} alt="Search Icon" />
      </SearchBox>
      <InputBox>
        <AddImage>
          <PlusIcon src={plusIcon} alt="Plus Icon" />
          사진 추가하기
        </AddImage>
        <WriteTitle placeholder="공연 제목을 입력해주세요"></WriteTitle>
        <SelectCategory>
          <option key="category" value="category">
            카테고리
          </option>
          <option key="option1" value="option1">
            option1
          </option>
          <option key="option2" value="option2">
            option2
          </option>
        </SelectCategory>
        <SelectCategory>
          <option key="category" value="category">
            날짜
          </option>
          <option key="option1" value="option1">
            option1
          </option>
          <option key="option2" value="option2">
            option2
          </option>
        </SelectCategory>
        <SelectCategory>
          <option key="category" value="category">
            시간
          </option>
          <option key="option1" value="option1">
            option1
          </option>
          <option key="option2" value="option2">
            option2
          </option>
        </SelectCategory>
        <SelectCategory>
          <option key="category" value="category">
            지역
          </option>
          <option key="option1" value="option1">
            option1
          </option>
          <option key="option2" value="option2">
            option2
          </option>
        </SelectCategory>
        <SelectCategory>
          <option key="category" value="category">
            장소
          </option>
          <option key="option1" value="option1">
            option1
          </option>
          <option key="option2" value="option2">
            option2
          </option>
        </SelectCategory>
      </InputBox>
    </InfoBox>
  );
}

export const InfoBox = styled.div`
  width: 245px;
  margin-top: 153px;
  margin-left: 90px;
  margin-right: 40px;
  border: 1px solid var(--festie-gray-200, #e8e8e8);
  border-radius: 20px;
  justify-content: center;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const SearchBox = styled.div`
  width: 155px;
  border-radius: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 20px;
  border: 1px solid var(--festie-primary-orange, #ff7a00);
  color: var(--festie-primary-orange);
`;

export const SearchInput = styled.input`
  width: 130px;
  height: 22px;
  border: none;
  outline: none;

  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const IconImage = styled.img`
  cursor: pointer;
`;

export const InputBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 25px;
  height: 640px;
`;

const WriteTitle = styled.input`
  width: 173px;
  height: 48px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
  padding: 0px;
  outline: none;
  padding: 0px 12px;

  color: var(--festie-gray-500, #b7b7b7);
  text-align: right;
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
const SelectCategory = styled.select`
  width: 197px;
  height: 48px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
  padding: 0px 12px;

  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  appearance: none;
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
`;

export const AddImage = styled.div`
  width: 197px;
  height: 280px;
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

export const PlusIcon = styled.img`
  margin-bottom: 23px;
`;
