import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reactions from 'components/Header/Reaction';
import SendersInfo from 'components/Header/SendersInfo';
import SharedUrl from 'components/Header/SharedUrl';
import useMessagesInfo from 'hooks/useMessagesInfo';
import styled from 'styled-components';
import theme from 'styles/theme';

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
        <Reactions />
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
`;

const StyledReceiver = styled.div`
  width: 227px;
  font-size: 1.75rem;
  font-weight: ${theme.fontWeight.bold};
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
