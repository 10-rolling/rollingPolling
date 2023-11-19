import { Link } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import { styled } from 'styled-components';
import theme from 'styles/theme';

function NotFound() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledTitle>404 Not Found</StyledTitle>
        <p>페이지를 찾을 수 없습니다!</p>
        <Link to="/">
          <StyledButton>홈으로 돌아가기</StyledButton>
        </Link>
      </StyledWrapper>
    </>
  );
}

export default NotFound;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 300px;
`;

const StyledTitle = styled.h2`
  font-weight: ${theme.fontWeight.bold};
`;

const StyledButton = styled.button`
  color: ${theme.colors.white};
  padding: 10px 30px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: ${theme.colors.purple700};
`;
