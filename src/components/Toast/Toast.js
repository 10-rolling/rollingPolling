import { URL_COPY } from 'constants/message';
import useToastStore from 'hooks/useToastStore';
import close from 'assets/icons/close.svg';
import complete from 'assets/icons/complete.svg';
import styled from 'styled-components';
import theme from 'styles/theme';
import { onTablet } from 'styles/mediaQuery';

function Toast({ content = URL_COPY }) {
  const { hide } = useToastStore();

  return (
    <StyledToast>
      <StyledToastContentWrapper>
        <img src={complete} alt="완료 아이콘" />
        <StyledToastContent>{content}</StyledToastContent>
      </StyledToastContentWrapper>
      <StyledCloseButton
        onClick={() => {
          hide();
        }}
      />
    </StyledToast>
  );
}

export default Toast;

const StyledToast = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 524px;
  padding: 19px 30px;
  border-radius: 8px;

  background: rgba(0, 0, 0, 0.8);

  z-index: 2;

  ${onTablet} {
    bottom: -90vh;
  }

  ${onTablet} {
    width: 90%;
    bottom: -92vh;
  }
`;

const StyledToastContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
`;

const StyledToastContent = styled.p`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.94rem;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

const StyledCloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;

  background: transparent;
  background-image: url(${close});
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;
