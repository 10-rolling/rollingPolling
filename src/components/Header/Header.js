import Reactions from 'components/Header/Reaction';
import SendersInfo from 'components/Header/SendersInfo';
import SharedUrl from 'components/Header/SharedUrl';
import styled from 'styled-components';
import theme from 'styles/theme';

function Header() {
  return (
    <StyledWrapper>
      <StyledHeaderContent>
        <SendersInfo />
        <Reactions />
        <SharedUrl />
      </StyledHeaderContent>
    </StyledWrapper>
  );
}

export default Header;

const StyledWrapper = styled.div`
  padding: 13px 0;
  background: ${theme.colors.white};
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;
