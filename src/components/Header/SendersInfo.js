import styled from 'styled-components';
import theme from 'styles/theme';

function SendersInfo({ count, profileImages }) {
  return (
    <StyledWrapper>
      {count > 0 && (
        <StyledProfileImgs>
          {profileImages.slice(0, 4).map((item, index) => (
            <StyledProfileItem key={index} url={item} />
          ))}
        </StyledProfileImgs>
      )}
      <StyledContent>
        <span>{count}</span>명이 작성했어요!
      </StyledContent>
    </StyledWrapper>
  );
}

export default SendersInfo;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 56px;
  font-size: 1.125rem;
  color: ${theme.colors.gray900};
`;

const StyledProfileImgs = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  z-index: 2;
`;

const StyledProfileItem = styled.li`
  display: inline-block;
  position: relative;
  top: 0;

  width: 32px;
  height: 32px;

  border: 1px solid ${theme.colors.white};
  border-radius: 100%;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:nth-child(2) {
    left: -5%;
  }

  &:nth-child(3) {
    left: -10%;
  }

  &:nth-child(4) {
    left: -15%;
  }
`;

const StyledContent = styled.div`
  width: max-content;

  span {
    font-weight: ${theme.fontWeight.bold};
  }
`;
