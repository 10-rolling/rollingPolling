import { useState } from 'react';
import styled from 'styled-components';
import arrowDown from 'assets/icons/arrowDown.png';
import arrowUp from 'assets/icons/arrowUp.png';

import {
  DROPDOWN_ITEMS_DEFAULT,
  PLACE_HOLDER_DEFAULT,
} from 'constants/dropdownItem';
import theme from 'styles/theme';

const { gray100, gray300, gray500, gray700, Error, white } = theme.colors;
const ERROR_MESSAGE_DEFAULT = 'Error Message';

//<Dropdown iserror={hasError ? 'true' : 'false'}  ,  disabled />
function Dropdown({
  items = DROPDOWN_ITEMS_DEFAULT,
  iserror,
  errorMessage = ERROR_MESSAGE_DEFAULT,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <StyledDropdownContainer iserror={iserror}>
      <StyledDropdownButton
        onClick={toggleDropdown}
        onBlur={closeDropdown}
        {...props}
      >
        {selectedItem ? selectedItem.content : PLACE_HOLDER_DEFAULT}
        <StyledDropdownIcon src={isOpen ? arrowUp : arrowDown} />
      </StyledDropdownButton>
      {iserror && <StyleErrorMessage>{errorMessage}</StyleErrorMessage>}
      <StyledDropdownMenu open={isOpen}>
        {items.map((item) => (
          <StyledDropdownItem
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            {item.content}
          </StyledDropdownItem>
        ))}
      </StyledDropdownMenu>
    </StyledDropdownContainer>
  );
}

export default Dropdown;

const StyledDropdownButton = styled.button`
  display: flex;
  justify-content: space-between;

  width: 320px;
  height: 50px;

  border-radius: 8px;
  background-color: ${white};
  padding: 12px 16px;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${gray500};
`;

const StyledDropdownMenu = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  box-shadow: 0px 2px 12px 0px #00000014;
  padding: 0;
  margin-top: 10px;
  border-radius: 8px;
  background-color: ${white};
`;

const StyledDropdownItem = styled.li`
  padding: 10px;
  font-weight: ${theme.fontWeight.normal};
  font-size: 1.6rem;

  &:hover {
    background-color: ${gray100};
  }
`;
const StyledDropdownIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const StyleErrorMessage = styled.p`
  color: ${Error};
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.normal};
`;

const StyledDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  ${StyledDropdownButton} {
      border: 1px solid ${({ iserror }) =>
        iserror ? `${Error}` : `${gray300}`};

    &:focus,&:hover {
      border-color: ${({ iserror }) => (iserror ? `${Error}` : `${gray500}`)};
    }
    &:active {
      border: 2px solid
      border-color: ${gray700};
    }
    &:disabled{
      background-color:${gray100}
    }
  }
`;
