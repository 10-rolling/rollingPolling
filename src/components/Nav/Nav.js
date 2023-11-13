import { Link } from 'react-router-dom';
import OutlinedButton from 'components/Button/OutlinedButton';
import logo from 'assets/images/logo.png';
import styled from 'styled-components';

function Nav({ hide }) {
  return (
    <StyledWrapper>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>
      <StyledLink to="/post" hide={hide}>
        <OutlinedButton
          content="롤링 페이퍼 만들기"
          size="smallest"
          width="150px"
          height="35px"
        />
      </StyledLink>
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
  padding: 10px 15%;
  border-bottom: 1px solid rgba(237, 237, 237, 1);
`;

const StyledLink = styled(Link)`
  position: absolute;
  display: ${(props) => (props.hide ? 'none' : '')};
  right: 0;
  padding-right: 15%;
`;
