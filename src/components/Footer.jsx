import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

export default function Footer() {
  return (
    <FooterWrap>
      <TeamWrap href="https://sprout-meal-c82.notion.site/Festie-e774180c25744bdc9de6dc64f22d8b09?pvs=4">
        <TeamText>Festie 팀 소개</TeamText>
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#949494"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </StyledIcon>
      </TeamWrap>
      <SNSWrap>
        <SNSText>Festie 채널 바로가기</SNSText>
        <SNSLogoWrap href="https://sprout-meal-c82.notion.site/Festie-e774180c25744bdc9de6dc64f22d8b09?pvs=4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M8.64733 8.37266C9.47467 9.04416 9.7835 8.99316 11.3362 8.88974L25.9732 8.01141C26.2848 8.01141 26.0256 7.69974 25.9222 7.64874L23.4912 5.89207C23.0251 5.53082 22.4046 5.11574 21.216 5.21916L7.04225 6.25332C6.52658 6.30432 6.42317 6.56357 6.62858 6.77041L8.64733 8.37266ZM9.52567 11.784V27.1832C9.52567 28.0119 9.93933 28.3207 10.8715 28.2697L26.9563 27.339C27.8871 27.288 27.9905 26.7185 27.9905 26.047V10.7498C27.9905 10.0783 27.7327 9.71566 27.1632 9.76807L10.353 10.7498C9.7325 10.8008 9.52567 11.1111 9.52567 11.784ZM25.4065 12.6099C25.5085 13.0746 25.4065 13.5407 24.939 13.5931L24.1641 13.7475V25.1162C23.4912 25.4789 22.8707 25.6857 22.3536 25.6857C21.5263 25.6857 21.3194 25.4265 20.6989 24.6516L15.6287 16.6927V24.3937L17.2338 24.755C17.2338 24.755 17.2338 25.6857 15.9389 25.6857L12.3703 25.8926C12.2669 25.6857 12.3703 25.1701 12.733 25.0652L13.6638 24.8074V14.6258L12.3703 14.5224C12.2669 14.0563 12.5262 13.3848 13.2501 13.3324L17.0779 13.076L22.3536 21.1368V14.0067L21.0078 13.8523C20.9058 13.2828 21.3194 12.8706 21.8365 12.8182L25.4065 12.6113V12.6099ZM5.85225 4.85791L20.5941 3.77274C22.4032 3.61691 22.8693 3.72174 24.0083 4.54766L28.713 7.85557C29.4893 8.42366 29.7486 8.57807 29.7486 9.19857V27.339C29.7486 28.4766 29.3349 29.1481 27.8871 29.2515L10.7667 30.2857C9.68008 30.3367 9.163 30.1822 8.5935 29.4583L5.12833 24.9618C4.50783 24.1345 4.25 23.5154 4.25 22.7901V6.66699C4.25 5.73624 4.66225 4.96132 5.85225 4.85791Z"
              fill="#B7B7B7"
            />
          </svg>
        </SNSLogoWrap>
        <SNSLogoWrap href="https://github.com/UMC-Festie">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M17.0007 2.83301C15.1403 2.83301 13.2981 3.19944 11.5793 3.91138C9.86052 4.62332 8.2988 5.66683 6.9833 6.98233C4.32654 9.63909 2.83398 13.2424 2.83398 16.9997C2.83398 23.2613 6.89982 28.5738 12.524 30.458C13.2323 30.5713 13.459 30.1322 13.459 29.7497V27.3555C9.53482 28.2055 8.69898 25.4572 8.69898 25.4572C8.04732 23.8138 7.12648 23.3747 7.12648 23.3747C5.83732 22.4963 7.22565 22.5247 7.22565 22.5247C8.64232 22.6238 9.39315 23.9838 9.39315 23.9838C10.6257 26.1372 12.7082 25.4997 13.5157 25.1597C13.6432 24.2388 14.0115 23.6155 14.4082 23.2613C11.2632 22.9072 7.96232 21.6888 7.96232 16.2913C7.96232 14.7188 8.50065 13.458 9.42148 12.4522C9.27982 12.098 8.78398 10.6247 9.56315 8.71217C9.56315 8.71217 10.7532 8.32967 13.459 10.1572C14.5782 9.84551 15.7965 9.68967 17.0007 9.68967C18.2048 9.68967 19.4232 9.84551 20.5423 10.1572C23.2482 8.32967 24.4382 8.71217 24.4382 8.71217C25.2173 10.6247 24.7215 12.098 24.5798 12.4522C25.5007 13.458 26.039 14.7188 26.039 16.2913C26.039 21.703 22.724 22.893 19.5648 23.2472C20.0748 23.6863 20.5423 24.5505 20.5423 25.868V29.7497C20.5423 30.1322 20.769 30.5855 21.4915 30.458C27.1157 28.5597 31.1673 23.2613 31.1673 16.9997C31.1673 15.1393 30.8009 13.2971 30.0889 11.5783C29.377 9.85955 28.3335 8.29783 27.018 6.98233C25.7025 5.66683 24.1408 4.62332 22.422 3.91138C20.7032 3.19944 18.861 2.83301 17.0007 2.83301Z"
              fill="#B7B7B7"
            />
          </svg>
        </SNSLogoWrap>
        <SNSLogoWrap href="https://instagram.com/festie.official?igshid=MjEwN2IyYWYwYw==">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M16.9994 12.5738C14.5623 12.5738 12.5734 14.5627 12.5734 16.9998C12.5734 19.4369 14.5623 21.4258 16.9994 21.4258C19.4365 21.4258 21.4254 19.4369 21.4254 16.9998C21.4254 14.5627 19.4365 12.5738 16.9994 12.5738ZM30.274 16.9998C30.274 15.167 30.2906 13.3508 30.1877 11.5213C30.0848 9.3963 29.6 7.51036 28.0461 5.95646C26.4889 4.39923 24.6063 3.91778 22.4813 3.81485C20.6484 3.71193 18.8322 3.72853 17.0027 3.72853C15.1699 3.72853 13.3537 3.71193 11.5242 3.81485C9.39923 3.91778 7.51329 4.40255 5.95939 5.95646C4.40216 7.51368 3.92071 9.3963 3.81778 11.5213C3.71485 13.3541 3.73146 15.1703 3.73146 16.9998C3.73146 18.8293 3.71485 20.6488 3.81778 22.4783C3.92071 24.6033 4.40548 26.4893 5.95939 28.0432C7.51661 29.6004 9.39923 30.0818 11.5242 30.1848C13.357 30.2877 15.1733 30.2711 17.0027 30.2711C18.8356 30.2711 20.6518 30.2877 22.4813 30.1848C24.6063 30.0818 26.4922 29.5971 28.0461 28.0432C29.6033 26.4859 30.0848 24.6033 30.1877 22.4783C30.294 20.6488 30.274 18.8326 30.274 16.9998ZM16.9994 23.8098C13.2309 23.8098 10.1895 20.7684 10.1895 16.9998C10.1895 13.2313 13.2309 10.1899 16.9994 10.1899C20.768 10.1899 23.8094 13.2313 23.8094 16.9998C23.8094 20.7684 20.768 23.8098 16.9994 23.8098ZM24.0883 11.5014C23.2084 11.5014 22.4979 10.7908 22.4979 9.91095C22.4979 9.03107 23.2084 8.32052 24.0883 8.32052C24.9682 8.32052 25.6787 9.03107 25.6787 9.91095C25.679 10.1199 25.638 10.3268 25.5582 10.5199C25.4784 10.713 25.3612 10.8884 25.2135 11.0361C25.0657 11.1839 24.8903 11.301 24.6972 11.3808C24.5042 11.4607 24.2972 11.5016 24.0883 11.5014Z"
              fill="#B7B7B7"
            />
          </svg>
        </SNSLogoWrap>
        <CopyToClipboard
          className="Festie Email"
          text="festie.official@gmail.com"
          onCopy={() => alert("이메일 주소가 클립보드에 복사되었습니다.")}
        >
          <SNSLogoWrap>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M3.00414 10.303C3.05671 9.14469 3.5703 8.05067 4.43783 7.24901C5.30536 6.44735 6.45988 5.99992 7.66071 6H27.3393C28.5401 5.99992 29.6946 6.44735 30.5622 7.24901C31.4297 8.05067 31.9433 9.14469 31.9959 10.303L30.4671 11.123L17.5 17.864L4.53286 11.123L3.00414 10.303ZM3 12.588V23.5C3 24.6935 3.49104 25.8381 4.36509 26.682C5.23915 27.5259 6.42462 28 7.66071 28H27.3393C28.5754 28 29.7609 27.5259 30.6349 26.682C31.509 25.8381 32 24.6935 32 23.5V12.588L31.4552 12.881L17.9909 19.881C17.84 19.9594 17.6714 20.0005 17.5 20.0005C17.3286 20.0005 17.16 19.9594 17.0091 19.881L3.53236 12.874L3 12.588Z"
                fill="#B7B7B7"
              />
            </svg>
          </SNSLogoWrap>
        </CopyToClipboard>
      </SNSWrap>

      <LogoWrap>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="32"
          viewBox="0 0 104 32"
          fill="none"
        >
          <path
            d="M8.63618 30.381C0.741446 19.5979 7.30764 12.8049 12.5573 12.8049C17.8069 12.8049 16.7393 17.6392 12.5573 17.6392C9.13778 17.6392 1.122 14.4025 2.92879 8.09181C4.73558 1.7811 13.6317 1.28782 17.943 2.96535"
            stroke="#B7B7B7"
            strokeWidth="4"
          />
          <path
            d="M18.9453 15.9945C19.848 17.0343 21.5896 18.581 23.8634 19.8158M23.8634 19.8158C26.0819 21.0206 28.8069 21.9284 31.7535 21.7786C39.2114 21.3995 38.9679 13.7052 31.7395 13.2715C27.2825 13.0041 24.5608 16.2009 23.8634 19.8158ZM23.8634 19.8158C23.4297 22.0635 23.7787 24.4729 24.9798 26.3116C28.095 31.0804 35.5308 29.5618 37.944 27.159"
            stroke="#B7B7B7"
            strokeWidth="4"
          />
          <path
            d="M83.001 15.9945C83.9036 17.0343 85.6453 18.581 87.919 19.8158M87.919 19.8158C90.1375 21.0206 92.8626 21.9284 95.8091 21.7786C103.267 21.3995 103.024 13.7052 95.7952 13.2715C91.3382 13.0041 88.6164 16.2009 87.919 19.8158ZM87.919 19.8158C87.4854 22.0635 87.8344 24.4729 89.0355 26.3116C92.1507 31.0804 99.5865 29.5618 102 27.159"
            stroke="#B7B7B7"
            strokeWidth="4"
          />
          <path
            d="M57.584 11.7631C58.2024 13.0798 59.9266 15.125 63.9869 15.8648M63.9869 15.8648C64.8657 16.0249 66.47 16.035 67.5326 15.9958C73.5572 15.7735 71.8828 10.1664 67.8712 11.3717C65.6708 12.0329 64.4132 13.7369 63.9869 15.8648ZM63.9869 15.8648C63.8126 16.7345 63.55 18.3615 63.4248 19.7306C63.1185 23.0812 63.0816 25.447 64.399 27.4594C66.2559 30.2962 70.5691 30.2214 73.1167 27.4594"
            stroke="#B7B7B7"
            strokeWidth="4"
          />
          <path
            d="M79.0215 1.57462C78.3249 2.47324 77.3329 3.4516 77.096 5.42576C76.7109 8.635 79.2253 10.6767 81.0756 10.1754C82.9258 9.6741 83.643 6.90167 81.5249 6.00299C79.4067 5.10432 76.8394 6.7733 78.0681 15.7495C78.7783 20.9378 79.2632 26.6755 78.4604 31.3447"
            stroke="#B7B7B7"
            strokeWidth="4"
          />
          <path
            d="M53.9256 11.7799C46.7369 9.9826 43.2067 12.1649 42.8858 15.8224C42.3921 21.4494 53.5001 22.9826 55.0809 20.4448C56.5211 18.1327 52.3578 15.8425 50.9359 18.1983C49.1387 21.1756 55.111 22.1778 54.6316 26.0935C54.4443 27.6239 53.3479 29.8157 48.7266 29.5595C43.4849 29.2689 41.8802 26.5214 41.7305 25.2591"
            stroke="#B7B7B7"
            strokeWidth="4"
          />
        </svg>
      </LogoWrap>
      <CopyrightText>Copyrightⓒ2022.Festie. All rights reserved.</CopyrightText>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: var(--festie-gray-50, #fcfcfc);
  height: 126px;
  padding: 32px 151px 42px 90px;
  margin-top: 128px;
`;

const LogoWrap = styled.div`
  width: 100%;
`;

const TeamWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
`;

const TeamText = styled.div`
  color: var(--festie-gray-600, #949494);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 36px;
  cursor: pointer;
`;

const StyledIcon = styled.svg`
  margin-left: 4px;
  cursor: pointer;
`;

const CopyrightText = styled.div`
  width: 100%;
  margin-top: 14px;
  color: var(--festie-gray-600, #949494);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const SNSText = styled.div`
  color: var(--festie-gray-600, #949494);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 18px;
  margin-right: 47px;
`;

const SNSWrap = styled.div`
  margin-left: auto;
`;

const SNSLogoWrap = styled.a`
  margin-right: 16px;
  cursor: pointer;
`;
const EmailLogo = styled.button`
  margin-right: 16px;
  cursor: pointer;
`;
