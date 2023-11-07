import { useState } from 'react';
import styled from 'styled-components';
import arrowDown from 'assets/icons/arrowDown.svg';
import arrowUp from 'assets/icons/arrowUp.svg';

import {
  DROPDOWN_ITEMS_DEFAULT,
  PLACE_HOLDER_DEFAULT,
} from 'constants/dropdownItem';
import theme from 'styles/theme';

const ERROR_MESSAGE_DEFAULT = 'Error Message';

//<Dropdown $isError={boolean}  ,  disabled />
function Dropdown({
  items = DROPDOWN_ITEMS_DEFAULT,
  $isError,
  errorMessage = ERROR_MESSAGE_DEFAULT,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(PLACE_HOLDER_DEFAULT);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleItem = (item) => {
    setSelectedItem(item.content);
    closeDropdown();
  };

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
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray500};
  font-size: 1.6rem;
  cursor: pointer;
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
`;

const StyledDropdownItem = styled.li`
  padding: 10px;
  font-weight: ${theme.fontWeight.normal};
  font-size: 1.6rem;
  &:hover {
    background-color: ${theme.colors.gray100};
  }
`;
const StyledDropdownIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const StyleErrorMessage = styled.p`
  color: ${theme.colors.Error};
  font-weight: ${theme.fontWeight.normal};
  font-size: 1.2rem;
`;

const StyledDropdownContainer = styled.div`
  display: inline-block;
  position: relative;

  ${StyledDropdownButton} {
    border: 1px solid
      ${({ $isError }) =>
        $isError ? `${theme.colors.Error}` : `${theme.colors.gray300}`};

    &:not(:disabled)&:focus,
    &:not(:disabled)&:hover {
      border-color: ${({ $isError }) =>
        $isError ? `${theme.colors.Error}` : `${theme.colors.gray500}`};
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