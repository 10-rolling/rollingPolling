import Close from 'assets/icons/close.svg';
import Complete from 'assets/icons/completed.svg';
import styled from 'styled-components';

const URL_COPY = 'URL이 복사 되었습니다.';

function Toast({ content = URL_COPY }) {
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

const StyledToast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 524px;
  padding: 19px 30px;
  border-radius: 8px;

  background: rgba(0, 0, 0, 0.8);

  gap: 253px;
`;

const StyledToastContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
`;

const StyledToastContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 1.5rem;
  line-height: 26px;
  letter-spacing: -0.16px;

  font-family: 'NotoSansKR';
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