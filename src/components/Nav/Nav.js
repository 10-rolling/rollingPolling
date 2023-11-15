import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import OutlinedButton from 'components/Button/OutlinedButton';
import PrimaryButton from 'components/Button/PrimaryButton';
import { deleteAll } from 'libs/api';
import useMessagesInfo from 'hooks/useMessagesInfo';
import logo from 'assets/images/logo.png';
import styled from 'styled-components';
import { onMobile, onTablet } from 'styles/mediaQuery';
import theme from 'styles/theme';

function Nav({ hide, hideAll }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { name } = useMessagesInfo();
  const { pathname } = useLocation();
  return (
    <StyledWrapper $hideAll={hideAll}>
      <StyledChangeNav $hide={hide}>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </StyledChangeNav>
      <Link to="/">
        <StyledName $hide={hide}>To. {name}</StyledName>
      </Link>
      <StyledLink to="/post" $hide={hide}>
        <OutlinedButton
          content="롤링 페이퍼 만들기"
          size="smallest"
          width="150px"
          height="35px"
        />
      </StyledLink>
      {pathname.endsWith('/edit') ? (
        <StyledButton>
          <PrimaryButton
            content="삭제하기"
            size="small"
            width="100%"
            onClick={() => {
              deleteAll(id);
              navigate('/');
            }}
          />
        </StyledButton>
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
    display: ${(props) => (props.$hideAll ? 'none' : '')};
  }
`;

const StyledLink = styled(Link)`
  display: ${(props) => (props.$hide ? 'none' : '')};
`;

const StyledButton = styled.div`
  ${onTablet} {
    position: absolute;
    width: 90%;
    left: 40px;
    bottom: 24px;
  }

  ${onMobile} {
    left: 18px;
    z-index: 2;
  }
`;

const StyledChangeNav = styled.div`
  ${onMobile} {
    display: ${(props) => (props.$hide ? 'none' : 'block')};
  }
`;

const StyledName = styled.div`
  display: none;
  ${onMobile} {
    display: ${(props) => (props.$hide ? 'block' : 'none')};
    width: 227px;
    font-size: 1.125rem;
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.gray800};
  }
`;
