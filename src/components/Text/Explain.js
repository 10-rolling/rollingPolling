import styled from 'styled-components';
import { onTablet } from 'styles/mediaQuery';
import theme from 'styles/theme';

function Explain({ title, brTitle, subTitle }) {
  return (
    <StyledWrapper>
      <StyledTitle>
        {title} <br />
        {brTitle}
      </StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledWrapper>
  );
}

export default Explain;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledTitle = styled.span`
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.bold};

  ${onTablet} {
    font-size: 1.125rem;
    word-break: keep-all;
  }
`;

const StyledSubTitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.gray500};

  ${onTablet} {
    font-size: 0.9375rem;
  }
`;
