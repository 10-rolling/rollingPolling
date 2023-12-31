import { useEffect } from 'react';
import Toast from 'components/Toast/Toast';
import useKakaoStore from 'hooks/useKakaoStore';
import useToastStore from 'hooks/useToastStore';
import useSharedToggleStore from 'hooks/useSharedToggleStore';
import { URL_ITEMS } from 'constants/common';
import shared from 'assets/icons/share.svg';
import styled from 'styled-components';
import theme from 'styles/theme';
import { onMobile } from 'styles/mediaQuery';

function SharedUrl() {
  const { initializeKakao, isKakaoInitialized, shareMessage } = useKakaoStore();
  const { isVisible, show } = useToastStore();
  const { isOpen, toggleDropdown, closeDropdown } = useSharedToggleStore();

  const handleItem = (item) => {
    if (item.id === 1) {
      if (isKakaoInitialized) {
        shareMessage();
      } else {
        alert('카카오톡 서버를 불러오고 있습니다 .. ⌛');
      }
    } else show();
    closeDropdown();
  };

  useEffect(() => {
    initializeKakao();
  }, []);

  return (
    <StyledWrapper>
      <img
        src={shared}
        alt="공유 이미지"
        onClick={() => {
          toggleDropdown();
        }}
      />
      {isOpen && (
        <StyledDropdownMenu>
          {URL_ITEMS.map((item) => (
            <StyledDropdownItem key={item.id} onClick={() => handleItem(item)}>
              {item.content}
            </StyledDropdownItem>
          ))}
        </StyledDropdownMenu>
      )}
      {isVisible && <Toast />}
    </StyledWrapper>
  );
}

export default SharedUrl;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.gray300};
  background: ${theme.colors.white};

  cursor: pointer;

  ${onMobile} {
    padding: 6px 8px;
    gap: 0;
  }
`;

const StyledDropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  left: -82px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0;
  border: 1px solid ${theme.colors.gray300};
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px #00000014;

  background-color: ${theme.colors.white};

  list-style: none;
  z-index: 2;

  ${onMobile} {
    left: -97px;
  }
`;

const StyledDropdownItem = styled.li`
  display: flex;
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;

  font-weight: ${theme.fontWeight.normal};
  font-size: 1rem;
  &:hover {
    background-color: ${theme.colors.gray100};
  }
`;
