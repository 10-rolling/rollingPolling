import { useEffect, useState } from 'react';
import { DROPDOWN_ITEMS, DROPDOWN_FONT_ITEMS } from 'constants/dropdownItem';
import { DROPDOWN_ERROR_MESSAGE_DEFAULT } from 'constants/message';
import useRelationShip from 'hooks/useRealationShip';
import useSelectFont from 'hooks/useSelectFont';
import arrowDown from 'assets/icons/arrowdown.svg';
import arrowUp from 'assets/icons/arrowUp.svg';
import styled from 'styled-components';
import theme from 'styles/theme';

// <Dropdown $isError={boolean}, disabled />
function Dropdown({
  items = DROPDOWN_ITEMS,
  $isError,
  errorMessage = DROPDOWN_ERROR_MESSAGE_DEFAULT,
  placeholder,
  value,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const { setRelationShip } = useRelationShip();
  const { setSelectFont } = useSelectFont();

  const checkPlaceHolder = () => {
    placeholder === DROPDOWN_FONT_ITEMS[0].content
      ? setSelectedItem(DROPDOWN_FONT_ITEMS[0].content)
      : setSelectedItem(DROPDOWN_ITEMS[0].content);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleItem = (item) => {
    setSelectedItem(item.content);
    placeholder === DROPDOWN_FONT_ITEMS[0].content
      ? setSelectFont(item.content)
      : setRelationShip(item.content);
    closeDropdown();
  };

  useEffect(() => {
    checkPlaceHolder();
  }, []);

  return (
    <StyledDropdownContainer $isError={$isError}>
      <StyledDropdownButton onClick={toggleDropdown} {...props}>
        {selectedItem}
        <StyledDropdownIcon src={isOpen ? arrowUp : arrowDown} />
      </StyledDropdownButton>
      {$isError && <StyleErrorMessage>{errorMessage}</StyleErrorMessage>}
      {isOpen && (
        <StyledDropdownMenu>
          {items.map((item) => (
            <StyledDropdownItem key={item.id} onClick={() => handleItem(item)}>
              {item.content}
            </StyledDropdownItem>
          ))}
        </StyledDropdownMenu>
      )}
    </StyledDropdownContainer>
  );
}

export default Dropdown;

const StyledDropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray500};
  font-size: 1rem;
`;

const StyledDropdownMenu = styled.ul`
  position: absolute;

  width: 100%;
  margin-top: 10px;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px #00000014;

  background-color: ${theme.colors.white};

  list-style: none;
  z-index: 2;
`;

const StyledDropdownItem = styled.li`
  padding: 10px;
  font-weight: ${theme.fontWeight.normal};
  font-size: 1rem;
  &:hover {
    background-color: ${theme.colors.gray100};
  }
`;

const StyledDropdownIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyleErrorMessage = styled.p`
  color: ${theme.colors.error};
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.75rem;
`;

const StyledDropdownContainer = styled.div`
  display: inline-block;
  position: relative;

  ${StyledDropdownButton} {
    border: 1px solid
      ${({ $isError }) =>
        $isError ? `${theme.colors.error}` : `${theme.colors.gray300}`};

    &:not(:disabled)&:focus,
    &:not(:disabled)&:hover {
      border-color: ${({ $isError }) =>
        $isError ? `${theme.colors.error}` : `${theme.colors.gray500}`};
    }
    &:active {
      border: 2px solid;
      border-color: ${theme.colors.gray700};
    }
    &:disabled {
      background-color: ${theme.colors.gray100};
    }
  }
`;
