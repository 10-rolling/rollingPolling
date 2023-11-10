import styled from 'styled-components';
import theme from 'styles/theme';

function PaperCategory({ title, emogi }) {
  return (
    <StyledContent>
      {title} {emogi}
    </StyledContent>
  );
}

export default PaperCategory;

const StyledContent = styled.span`
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -1px;
`;
