import Close from 'assets/icons/close.svg';
import Complete from 'assets/icons/completed.svg';
import styled from 'styled-components';

const StyledToast = styled.div`
  width: 524px;
  padding: 19px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  gap: 253px;
`;

const StyledToastContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const StyledToastContent = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledCloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  background-image: url(${Close});
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;

function Toast({ content }) {
  return (
    <StyledToast>
      <StyledToastContentWrapper>
        <img src={Complete} alt="Complete 아이콘" />
        <StyledToastContent>{content}</StyledToastContent>
      </StyledToastContentWrapper>
      <StyledCloseButton />
    </StyledToast>
  );
}

export default Toast;
