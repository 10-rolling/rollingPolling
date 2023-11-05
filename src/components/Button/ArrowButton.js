import PropTypes from 'prop-types';
import styled from 'styled-components';

function ArrowButton({ imgSrc }) {
  return (
    <StyleWrapper>
      <img src={imgSrc} alt="Arrow Icon" />
    </StyleWrapper>
  );
}

ArrowButton.propTypes = {
  imgSrc: PropTypes.node.isRequired,
};

export default ArrowButton;

const StyleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 2.5rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 5.25rem;

  img {
    width: 1rem;
    height: 1rem;
  }
`;
