import styled from "styled-components";
import Card from "../components/common/Card";

const Nav = styled.div`
  height: 80px;
  border: solid 1px black;
`;

const Footer = styled.div`
  height: 240px;
  border: solid 1px black;
  background-color: black;
`;

const SLandingBody = styled.div`
  /* background-color: ${(props) => props.theme.mainColor}; */
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+KR&display=swap");
  font-family: "Noto Sans", sans-serif;
  font-family: "Noto Sans KR", sans-serif;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.mainColor},
    white
  );
  height: 50vh;
`;

const SContainer = styled.div`
  display: grid;
  grid-template-rows: 44.8vw 50.4vw 59.36vw 59.36vw;
  /* grid-template-rows: 640px 720px 848px 848px; */
`;
const SBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 72px;
  * {
    margin: 1.12vw 0px;
  }
`;
const SStudyList = styled.div`
  padding: 5.04vw;
  span {
    font-size: 2.52vw;
    font-weight: 600;
  }
`;
const SBannerItem = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 2.52vw;
    /* font-size: 36px; */
    :nth-child(2) {
      font-weight: 600;
      font-size: 3.36vw;
      margin-top: 1.68vw;
      /* font-size: 48px;
      margin-top: 24px; */
    }
  }
`;
const SBannerButton = styled.button`
  width: 16.7vw;
  height: 5.04vw;
  /* width: 240px;
  height: 72px; */
  /* border-radius: 16px; */
  border-radius: 1.12vw;
  background-color: black;
  color: white;
  /* font-size: 24px; */
  font-size: 1.68vw;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10.64vw;
`;
function LandingPages() {
  const bannerText = "어떤 스터디를 원하세요?";
  const bannerSubText = "당신의 스터디를 찾아보세요!";
  const bannerButtonText = "스터디 찾기";
  return (
    <SLandingBody>
      <Nav />
      <SContainer>
        <SBanner>
          <SBannerItem>
            <span>{bannerText}</span>
            <span>{bannerSubText}</span>
          </SBannerItem>
          <SBannerButton>{bannerButtonText}</SBannerButton>
        </SBanner>
        <SStudyList>
          <span>현재 인기있는 스터디</span>
          <Cards>
            <Card />
            <Card />
            <Card />
          </Cards>
        </SStudyList>
      </SContainer>
      <Footer />
    </SLandingBody>
  );
}

export default LandingPages;
