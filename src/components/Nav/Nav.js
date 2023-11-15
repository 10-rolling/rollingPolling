import { Link, useNavigate, useParams } from 'react-router-dom';
import OutlinedButton from 'components/Button/OutlinedButton';
import PrimaryButton from 'components/Button/PrimaryButton';
import { deleteAll } from 'libs/api';
import logo from 'assets/icons/logo.svg';
import styled from 'styled-components';
import { onMobile, onTablet } from 'styles/mediaQuery';

function Nav({ hide, hideAll }) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <StyledWrapper hideAll={hideAll}>
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
      {location.pathname.endsWith('/edit') ? (
        <PrimaryButton
          content="삭제하기"
          size="small"
          width="92px"
          onClick={() => {
            deleteAll(id);
            navigate('/');
          }}
        />
      ) : (
        <></>
      )}
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
    display: ${(props) => (props.hideAll ? 'none' : '')};
  }
`;

const StyledLink = styled(Link)`
  display: ${(props) => (props.hide ? 'none' : '')};
`;
