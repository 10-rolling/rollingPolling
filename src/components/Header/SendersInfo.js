import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipientMessage } from 'libs/api';
import styled from 'styled-components';
import theme from 'styles/theme';

function SendersInfo() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [count, setCount] = useState(0);
  const [profileImages, setProfileImages] = useState([]);

  const messagesInfo = async () => {
    const result = await getRecipientMessage(74); // id로 변경
    setCount(result.messageCount);
    setName(result.name);
    const { recentMessages } = result;
    const newProfileImages = [];
    console.log(recentMessages);
    for (let i = 0; i < result.messageCount; i++) {
      if (i === 3) {
        const profileImageURL =
          'https://github.com/miniposi/Programmers/assets/52947668/53f0d2b1-db58-41b2-a5ec-bc879ec5e5b9';
        newProfileImages.push(profileImageURL);
        continue;
      }
      const profileImageURL = recentMessages[i].profileImageURL;
      newProfileImages.push(profileImageURL);
    }

    setProfileImages(newProfileImages);
  };

  useEffect(() => {
    messagesInfo();
  }, []);

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
