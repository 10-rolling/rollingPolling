import styled from 'styled-components';
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
`;

const StyledSubTitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.gray500};
`;
