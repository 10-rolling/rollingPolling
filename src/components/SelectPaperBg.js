import Check from 'assets/icons/Check.svg';
import styled from 'styled-components';

function SelectPaperBg({ color }) {
  return (
    <StyledWrapper color={color}>
      <StyledIcon src={Check} />
    </StyledWrapper>
  );
}

export default SelectPaperBg;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  border: 1px;
  background-color: ${(props) => props.color};
`;

const StyledIcon = styled.img`
  width: 44px;
  height: 44px;
`;
