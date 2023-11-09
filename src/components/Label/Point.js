import styled from 'styled-components';
import theme from 'styles/theme';

function Point({ num }) {
  return <StyledWrapper>Point. {num}</StyledWrapper>;
}

export default Point;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;

  border-radius: 50px;
  gap: 10px;
  font-size: 0.87rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.purple600};
`;
