import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reactions from 'components/Header/Reaction';
import SendersInfo from 'components/Header/SendersInfo';
import SharedUrl from 'components/Header/SharedUrl';
import useMessagesInfo from 'hooks/useMessagesInfo';
import styled from 'styled-components';
import theme from 'styles/theme';
import { onMobile, onTablet } from 'styles/mediaQuery';

function Header() {
  const { id } = useParams();
  const { name, count, profileImages, fetchMessagesInfo } = useMessagesInfo();

  useEffect(() => {
    fetchMessagesInfo(id);
  }, [id, fetchMessagesInfo]);

  return (
    <StyledWrapper>
      <StyledReceiver>To. {name}</StyledReceiver>
      <StyledHeaderContent>
        <SendersInfo count={count} profileImages={profileImages} />
        <Reactions id={id} />
        <StyledOnlyMobileBar />
        <SharedUrl />
      </StyledHeaderContent>
    </StyledWrapper>
  );
}

export default Header;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
  padding: 13px 15%;

  ${onTablet} {
    position: relative;
    padding: 13px 24px;
    scale: 0.9;
    z-index: 5;
  }
  ${onMobile} {
    justify-content: center;
  }
`;

const StyledReceiver = styled.div`
  width: 227px;
  font-size: 1.75rem;
  font-weight: ${theme.fontWeight.bold};
  ${onMobile} {
    display: none;
  }
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const StyledOnlyMobileBar = styled.div`
  display: none;
  width: 1px;
  height: 28px;

  ${onMobile} {
    display: block;
    border: 1px solid ${theme.colors.gray200};
  }
`;
