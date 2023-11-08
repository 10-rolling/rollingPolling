import styled from 'styled-components';

function Relation({ category, background, color }) {
  return (
    <StyledWrapper background={background}>
      <StyledCategory color={color}>{category}</StyledCategory>
    </StyledWrapper>
  );
}

export default Relation;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 41px;
  height: 20px;
  top: 20px;
  left: 201px;
  padding: 0px, 8px, 0px, 8px;
  border-radius: 4px;
  gap: 10px;
  background-color: ${(props) => props.background};
`;

const StyledCategory = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.color};
`;
