import Reactions from 'components/Header/Reaction';
import SendersInfo from 'components/Header/SendersInfo';
import SharedUrl from 'components/Header/SharedUrl';
import styled from 'styled-components';
import theme from 'styles/theme';

function Header() {
  return (
    <>
      <StyledWrapper>
        <StyledReceiver>To. 궁수</StyledReceiver>
        <StyledHeaderContent>
          <SendersInfo />
          <Reactions />
          <SharedUrl />
        </StyledHeaderContent>
      </StyledWrapper>
    </>
  );
}

export default Header;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 13px 0;
  background: ${theme.colors.white};
`;

const StyledReceiver = styled.div`
  width: 227px;
  font-size: 1.75rem;
  font-weight: 700;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;
`;
