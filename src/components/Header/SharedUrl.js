import Toast from 'components/Toast/Toast';
import useToastStore from 'hooks/useToastStore';
import shared from 'assets/icons/share.svg';
import styled from 'styled-components';
import theme from 'styles/theme';

function SharedUrl() {
  const { isVisible, show } = useToastStore();

  return (
    <StyledWrapper>
      <img
        src={shared}
        alt="공유 이미지"
        onClick={() => {
          show();
        }}
      />
      {isVisible && <Toast />}
    </StyledWrapper>
  );
}

export default SharedUrl;

const StyledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.gray300};
  background: ${theme.colors.white};
`;
