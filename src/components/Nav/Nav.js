import { Link } from 'react-router-dom';
import OutlinedButton from 'components/Button/OutlinedButton';
import logo from 'assets/images/logo.png';
import styled from 'styled-components';
import { onMobile, onTablet } from 'styles/mediaQuery';

function Nav({ hide, buttonHide }) {
  return (
    <StyledWrapper hide={hide}>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>
      <StyledLink to="/post" buttonHide={buttonHide}>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 15%;
  border-bottom: 1px solid rgba(237, 237, 237, 1);

  ${onTablet} {
    padding: 10px 24px;
  }

  ${onMobile} {
    display: ${(props) => (props.hide ? 'none' : '')};
  }
`;

const StyledLink = styled(Link)`
  display: ${(props) => (props.buttonHide ? 'none' : '')};
`;
