import { useParams, Link } from 'react-router-dom';
import PlusButton from 'components/Button/PlusButton';
import styled from 'styled-components';
import theme from 'styles/theme';

function EmptyCard() {
  const { id } = useParams();

  return (
    <StyledWrapper>
      <StyledLink to={`/post/${id}/message`}>
        <PlusButton />
      </StyledLink>
    </StyledWrapper>
  );
}
export default EmptyCard;

const StyledWrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: ${theme.colors.white};
  padding: 25px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
