// import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../../assets/img/smile.png";
import "../../assets/css/index.css";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: var(--clr-white);
  box-shadow: 0px 0px 5px black;
  /* box-shadow: var(--light-shadow); */
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
  align-items: center;
`;

const NavHeader = styled.div`
  margin-left: 3rem;
`;

const LinksContainer = styled.div`
  overflow: hidden;
`;

const Items = styled.li`
  display: flex;
  margin-right: 2rem;
`;

const Item = styled.ul`
  list-style-type: none;
  margin: 0 2rem;
  /* 텍스트 세로 중앙 정렬 위해 display, align-items 속성 추가 */
  display: flex;
  align-items: center;

  &:hover,
  active,
  focus {
    cursor: pointer;
  }
`;

const NabBtn = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0;
  background-color: var(--clr-primary-4);
  color: white;
  border: 0;
  text-decoration: none;

  &:hover,
  active,
  focus {
    background: var(--clr-primary-4-hover);
  }
`;

const Img = styled.img`
  height: 30px;
`;

// Link가 포함된 컴포넌트를 Router 안에 들어가 있어야 사용이 가능 => 일단 보류(페이지 만들어진 뒤에 추가)

function NavBar() {
  return (
    <Nav>
      <NavHeader>
        <Img src={logoImg} />
      </NavHeader>
      <LinksContainer>
        <Items>
          <Item>{/* <Link to="">스터디 조회</Link> */} 스터디 조회</Item>
          <Item>내 스터디</Item>
          <Item>내 정보</Item>
          <Item>
            <NabBtn>로그아웃</NabBtn>
          </Item>
        </Items>
      </LinksContainer>
    </Nav>
  );
}
export default NavBar;
