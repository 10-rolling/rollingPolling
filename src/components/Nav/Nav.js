import { Link } from 'react-router-dom';
import OutlinedButton from 'components/Button/OutlinedButton';
import logo from 'assets/images/logo.png';
import styled from 'styled-components';

function Nav() {
  return (
    <StyledWrapper>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>
      <Link to="/post">
        <OutlinedButton
          content="롤링 페이퍼 만들기"
          size="smallest"
          width="150px"
          height="35px"
        />
      </Link>
    </StyledWrapper>
  );
}

export default Nav;

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(237, 237, 237, 1);
`;
