import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipientMessage } from 'libs/api';
import styled from 'styled-components';
import theme from 'styles/theme';

function SendersInfo() {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [profileImages, setProfileImages] = useState([]);

  const messagesInfo = async () => {
    const result = await getRecipientMessage(74); // id로 변경
    setCount(result.count);
    const newProfileImages = [];
    for (let i = 0; i < result.count; i++) {
      if (i === 3) {
        const profileImageURL =
          'https://github.com/miniposi/Programmers/assets/52947668/53f0d2b1-db58-41b2-a5ec-bc879ec5e5b9';
        newProfileImages.push(profileImageURL);
        continue;
      }
      const profileImageURL = result.results[i].profileImageURL;
      newProfileImages.push(profileImageURL);
    }

    setProfileImages(newProfileImages);
  };

  useEffect(() => {
    messagesInfo();
  }, []);

  return (
    <StyledWrapper>
      <StyledProfileImgs>
        {profileImages.slice(0, 4).map((item) => (
          <StyledProfileItem key={item} url={item} />
        ))}
      </StyledProfileImgs>
      <p>
        <span>{count}</span>명이 작성했어요!
      </p>
    </StyledWrapper>
  );
}

export default SendersInfo;

const StyledWrapper = styled.div`
  display: flex;
  font-size: 1.125rem;
  color: ${theme.colors.gray900};

  span {
    font-weight: ${theme.fontWeight.bold};
  }
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

  width: 28px;
  height: 28px;

  border: 1px solid ${theme.colors.white};
  border-radius: 100%;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:nth-child(2) {
    left: -10%;
  }

  &:nth-child(3) {
    left: -20%;
  }

  &:nth-child(4) {
    left: -30%;
  }
`;
