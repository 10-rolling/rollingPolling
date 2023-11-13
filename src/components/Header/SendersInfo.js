import useSenderInfo from 'hooks/useSendersInfo';
import styled from 'styled-components';
import theme from 'styles/theme';

function SendersInfo({ id }) {
  const { name, count, profileImages } = useSenderInfo({ id });

  return (
    <StyledWrapper>
      <StyledReceiver>To. {name}</StyledReceiver>
      <StyledProfileImgs>
        {profileImages.slice(0, 4).map((item) => (
          <StyledProfileItem key={item} url={item} />
        ))}
        <p>
          <span>{count}</span>명이 작성했어요!
        </p>
      </StyledProfileImgs>
    </StyledWrapper>
  );
}

export default SendersInfo;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2000px;

  font-size: 1.125rem;
  color: ${theme.colors.gray900};

  span {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const StyledReceiver = styled.div`
  width: 227px;
  font-size: 1.75rem;
  font-weight: ${theme.fontWeight.bold};
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
