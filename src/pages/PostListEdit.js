import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Card from 'components/Card/Card';
import EmptyCard from 'components/Card/EmptyCard';
import Header from 'components/Header/Header';
import Nav from 'components/Nav/Nav';
import useColorToCode from 'hooks/useColorToCode';
import useUserInfo from 'hooks/useUserInfo';
import { getMessage, getRecipient } from 'libs/api';
import { MESSAGE_LIMIT_DEFAULT } from 'constants/url';
import styled from 'styled-components';
import { onMobile, onTablet } from 'styles/mediaQuery';

function PostListEdit() {
  const { id } = useParams();
  const { color, setColor } = useColorToCode();
  const [isImage, setIsImage] = useState(false);
  const {
    userInfo,
    setUserInfo,
    recentMessages,
    setRecentMessages,
    updateRecentMessages,
    offset,
    setOffset,
  } = useUserInfo();
  const [offset, setOffset] = useState(0);
  const [ref, inView] = useInView();

  const init = (result) => {
    const { backgroundImageURL, backgroundColor } = result;
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
        setUserInfo(result);
      }
    });
  };

  const getMessageItems = async () => {
    const limit = MESSAGE_LIMIT_DEFAULT;
    await getMessage(id, limit, offset).then((result) => {
      if (result) {
        const { results } = result;
        let len = results.length;
        if (offset === 0) {
          setRecentMessages(results);
        } else {
          updateRecentMessages(results);
        }
        setOffset(len);
      }
    });
  };

  useEffect(() => {
    getUserInfo();
    getMessageItems();
  }, [id]);

  useEffect(() => {
    if (inView) {
      getMessageItems();
    }
  }, [inView]);

  return (
    <>
      <Nav hide />
      <Header />
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
                id={item.id}
                img={item.profileImageURL}
                name={item.sender}
                content={item.content}
                date={item.createdAt}
                category={item.relationship}
                font={item.font}
              />
            ))}
          <div ref={ref}></div>
        </StyledInWrapper>
      </StyledWrapper>
    </>
  );
}

export default PostListEdit;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 133px);
  ${({ $isImage, $backgroundImg, $backgroundColor }) =>
    $isImage
      ? `background-image: url(${$backgroundImg})`
      : `background-color: ${$backgroundColor}`};

  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledInWrapper = styled.div`
  position: relative;
  display: grid;
  height: 580px;
  overflow-y: auto;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);

  ${onTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${onMobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledDeleteButton = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
`;
