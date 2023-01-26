import styled from "styled-components";
import ProfileImg from "./ProfileImg";
import img from "../../assets/components/common/userDefaultImg.png";
import studyImg from "../../assets/components/common/card_photo_1.png";
const SContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+KR&display=swap");
  font-family: "Noto Sans", sans-serif;
  font-family: "Noto Sans KR", sans-serif;
  display: grid;
  grid-template-rows: 312px 213px;
  border-radius: 16px;
  width: 424px;
  height: 525px;
  border: solid 1px #e6e8ec;
  box-shadow: 0px 0px 16px ${(props) => props.theme.subColor};
  :hover {
    box-shadow: 0px 0px 24px #b4bbc5;
  }
`;

const SCardItem = styled.span`
  display: grid;
  grid-template-rows: 54px 60px 66px;
  padding: 10px 24px;
`;
const SCardImg = styled.img`
  border-radius: 16px 16px 0px 0px;
`;
const SCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SCardInfoItem = styled.span`
  display: flex;
  span {
    padding-top: 2.5px;
    margin-left: 4px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    span {
      font-weight: 400;
      color: ${(props) => props.theme.textSubColor};
    }
  }
`;
const SCardDescription = styled.span`
  font-size: 18px;
`;
const SCardUser = styled.div`
  display: flex;
  align-items: center;
`;
const SCardUserItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  height: 48px;
  justify-content: space-around;
  font-weight: 500;

  span {
    font-size: 16px;
    color: ${(props) => props.theme.textColor};
    :nth-child(2) {
      color: ${(props) => props.theme.textSubColor};
      font-weight: 300;
    }
  }
`;

function Card() {
  const name = "김싸피";
  const visitedTime = 1;
  const description = "다 함께 스터디 해요~~";
  const visitedCountInput = 2729;
  const visitedCount = visitedCountInput
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const personnelMax = 5;
  const personnelNow = 4;
  return (
    <SContainer>
      <SCardImg src={studyImg} />
      <SCardItem>
        <SCardInfo>
          <SCardInfoItem>
            <img src={require("../../assets/components/common/Door.png")} />
            <span>
              {visitedCount}
              <span>View</span>
            </span>
          </SCardInfoItem>
          <SCardInfoItem>
            <img src={require("../../assets/components/common/Users.png")} />
            <span>
              {personnelNow}/{personnelMax}
            </span>
          </SCardInfoItem>
        </SCardInfo>
        <SCardDescription>{description}</SCardDescription>
        <SCardUser>
          <ProfileImg imgUrl={img} width="48px" height="48px" />
          <SCardUserItem>
            <span>{name}</span>
            <span>{visitedTime} min read</span>
          </SCardUserItem>
        </SCardUser>
      </SCardItem>
    </SContainer>
  );
}

export default Card;
