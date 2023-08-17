import { useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/search.svg";
import selectArrow from "../assets/SelectArrow.svg";
import plusIcon from "../assets/plus.svg";
import CustomCalendar from "./Calander";

export default function WriteInfo() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAmPm, setSelectedAmPm] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [selectedFestivalPerformance, setSelectedFestivalPerformance] =
    useState("");
  const [showFestivalPerformanceOptions, setShowFestivalPerformanceOptions] =
    useState(false);

  const [showTimeOptions, setShowTimeOptions] = useState(false);
  const categories = [
    "연극",
    "뮤지컬",
    "서양음악(클래식)",
    "한국음악(국악)",
    "대중음악",
    "무용(서양/한국무용)",
    "대중 무용",
    "서커스/마술",
    "복합",
  ];
  const festivalPerformance = ["공연", "축제"];

  const ampm = ["오전", "오후"];
  const hour = Array.from({ length: 12 }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );
  const minute = Array.from({ length: 60 }, (_, index) =>
    String(index).padStart(2, "0")
  );

  const handleFestivalPerformanceChange = (value) => {
    setSelectedFestivalPerformance(value);
    setShowFestivalPerformanceOptions(false);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setShowCategoryOptions(false);
  };

  const handleAmPmChange = (value) => {
    setSelectedAmPm(value);
  };

  const handleHourChange = (value) => {
    setSelectedHour(value);
  };

  const handleMinuteChange = (value) => {
    setSelectedMinute(value);
    setShowTimeOptions(false);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <InfoBox>
      <SearchBox>
        <SearchInput placeholder="공연/축제 검색"></SearchInput>
        <IconImage src={searchIcon} alt="Search Icon" />
      </SearchBox>
      <InputBox>
        <AddImage for="file">
          <AddImageInput type="file" name="file" id="file"></AddImageInput>
          <PlusIcon src={plusIcon} alt="Plus Icon" />
          사진 추가하기
        </AddImage>
        <WriteTitle placeholder="공연 제목을 입력해주세요"></WriteTitle>
        <CustomDropdown>
          <DropdownToggle
            onClick={() => setShowFestivalPerformanceOptions((prev) => !prev)}
          >
            {selectedFestivalPerformance || "공연/축제 유형"}
          </DropdownToggle>
          {showFestivalPerformanceOptions && (
            <DropdownFestivalPerformance>
              {festivalPerformance.map((festivalPerformance, index) => (
                <FestivalPerfomanceOption
                  key={index}
                  onClick={() =>
                    handleFestivalPerformanceChange(festivalPerformance)
                  }
                  isSelected={
                    festivalPerformance === selectedFestivalPerformance
                  }
                >
                  {festivalPerformance}
                </FestivalPerfomanceOption>
              ))}
            </DropdownFestivalPerformance>
          )}
        </CustomDropdown>
        <CustomDropdown>
          <DropdownToggle
            onClick={() => setShowCategoryOptions((prev) => !prev)}
          >
            {selectedCategory || "카테고리"}
          </DropdownToggle>
          {showCategoryOptions && (
            <DropdownOptions>
              {categories.map((category, index) => (
                <CategoryOption
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  isSelected={category === selectedCategory}
                >
                  {category}
                </CategoryOption>
              ))}
            </DropdownOptions>
          )}
        </CustomDropdown>
        <CustomCalendar onChange={handleDateChange} value={selectedDate} />
        <CustomDropdown>
          <TimeDropdownToggle
            onClick={() => setShowTimeOptions((prev) => !prev)}
          >
            {selectedAmPm || "시간 "}
            {selectedHour ? ` ${selectedHour}` : ""}

            {selectedMinute ? `:${selectedMinute}` : ""}
          </TimeDropdownToggle>
          {showTimeOptions && (
            <TimeDropdownOptions>
              <TimeSection>
                {ampm.map((ap, index) => (
                  <TimeOption
                    key={index}
                    onClick={() => handleAmPmChange(ap)}
                    isSelected={ap === selectedAmPm}
                  >
                    {ap}
                  </TimeOption>
                ))}
              </TimeSection>
              <TimeSection>
                {hour.map((h, index) => (
                  <TimeOption
                    key={index}
                    onClick={() => handleHourChange(h)}
                    isSelected={h === selectedHour}
                  >
                    {h}
                  </TimeOption>
                ))}
              </TimeSection>
              <TimeSection>
                {minute.map((m, index) => (
                  <TimeOption
                    key={index}
                    onClick={() => handleMinuteChange(m)}
                    isSelected={m === selectedMinute}
                  >
                    {m}
                  </TimeOption>
                ))}
              </TimeSection>
            </TimeDropdownOptions>
          )}
        </CustomDropdown>
      </InputBox>
    </InfoBox>
  );
}

export const InfoBox = styled.div`
  width: 200px;
  margin-top: 94px;
  margin-left: 90px;
  margin-right: 40px;
  border: 1px solid var(--festie-gray-200, #e8e8e8);
  border-radius: 20px;
  justify-content: center;
  padding: 24px;
`;

export const SearchBox = styled.div`
  width: 155px;
  height: 24px;
  border-radius: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
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
  height: 600px;
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
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
const CustomDropdown = styled.div`
  position: relative;
`;

const DropdownToggle = styled.div`
  width: 174px;
  height: 48px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
`;

const DropdownOptions = styled.ul`
  z-index: 100;
  position: absolute;
  width: 197px;
  background-color: var(--festie-white, #fff);
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
`;

const DropdownFestivalPerformance = styled.ul`
  z-index: 101;
  position: absolute;
  width: 197px;
  background-color: var(--festie-white, #fff);
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
`;

const CategoryOption = styled.li`
  z-index: 9;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#ff7a00" : "transparent"};
  color: ${(props) =>
    props.isSelected ? "#fff" : "var(--festie-gray-800, #3a3a3a)"};
  &:hover {
    background-color: #ff7a00;
    color: #fff;
  }
`;

const FestivalPerfomanceOption = styled.li`
  z-index: 10;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#ff7a00" : "transparent"};
  color: ${(props) =>
    props.isSelected ? "#fff" : "var(--festie-gray-800, #3a3a3a)"};
  &:hover {
    background-color: #ff7a00;
    color: #fff;
  }
`;

const TimeOption = styled.li`
  z-index: 110;
  width: 34px;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#ff7a00" : "transparent"};
  color: ${(props) =>
    props.isSelected ? "#fff" : "var(--festie-gray-800, #3a3a3a)"};
  &:hover {
    background-color: #ff7a00;
    color: #fff;
  }
`;

export const AddImage = styled.label`
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
  cursor: pointer;
  z-index: 10;
`;

export const AddImageInput = styled.input`
  display: none;
`;

export const PlusIcon = styled.img`
  z-index: 10;
  margin-bottom: 23px;
`;
const TimeDropdownToggle = styled.div`
  width: 174px;
  height: 48px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

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

const TimeDropdownOptions = styled.div`
  z-index: 10;
  display: flex;
  list-style: none;
  position: absolute;
  background-color: var(--festie-white, #fff);
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
`;

const TimeSection = styled.div`
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  max-height: 180px;
  overflow-y: auto;
`;
