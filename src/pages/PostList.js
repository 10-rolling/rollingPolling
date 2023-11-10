import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'components/Card/Card';
import EmptyCard from 'components/Card/EmptyCard';
import Nav from 'components/Nav/Nav';
import useColorToCode from 'hooks/useColorToCode';
import useUserInfo from 'hooks/useUserInfo';
import { getRecipient } from 'libs/api';
import styled from 'styled-components';
//test id  = img  74    color 137
function PostList() {
  const { id } = useParams();
  const { userInfo, setUserInfo, recentMessages, setRecentMessages } =
    useUserInfo();
  const { color, setColor } = useColorToCode();
  const [isImage, setIsImage] = useState(false);

  const init = (result) => {
    const { recentMessages, backgroundImageURL, backgroundColor } = result;
    setUserInfo(result);
    setRecentMessages(recentMessages);
    if (backgroundImageURL) {
      setIsImage(true);
    } else {
      setColor(backgroundColor);
    }
  };

  const getUserInfo = async () => {
    await getRecipient(id).then((result) => {
      if (result) {
        init(result);
      }
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [id]);

  return (
    <>
      <Nav />
      <StyledWrapper
        $isImage={isImage}
        $backgroundImg={userInfo.backgroundImageURL}
        $backgroundColor={color}
      >
        <StyledInWrapper>
          <EmptyCard />
          {recentMessages.length > 0 &&
            recentMessages.map((item) => (
              <Card
                key={item.id}
                img={item.profileImageURL}
                name={item.sender}
                content={item.content}
                date={item.createdAt}
                category={item.relationship}
              />
            ))}
        </StyledInWrapper>
      </StyledWrapper>
    </>
  );
}

export default PostList;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  ${({ $isImage, $backgroundImg, $backgroundColor }) =>
    $isImage
      ? `background-image: url(${$backgroundImg})`
      : `background-color: ${$backgroundColor}`};

  background-repeat: no-repeat;
  background-size: cover;
  loading: eager;
`;

const StyledInWrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`;
