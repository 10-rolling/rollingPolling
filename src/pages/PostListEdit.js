import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'components/Card/Card';
import EmptyCard from 'components/Card/EmptyCard';
import Nav from 'components/Nav/Nav';
import useColorToCode from 'hooks/useColorToCode';
import useUserInfo from 'hooks/useUserInfo';
import { getRecipient, getMessage } from 'libs/api';
import Header from 'components/Header/Header';
import useEditFlag from 'hooks/useEditFlag';
import PrimaryButton from 'components/Button/PrimaryButton';
import { deleteAll } from 'libs/api';
import styled from 'styled-components';

function PostListEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo, setUserInfo, recentMessages, setRecentMessages } =
    useUserInfo();
  const { color, setColor } = useColorToCode();
  const [isImage, setIsImage] = useState(false);
  const { flag } = useEditFlag();
  const isTrue = true;

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
    await getMessage(id).then((result) => {
      if (result) {
        setRecentMessages(result.results);
      }
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [id, flag]);

  return (
    <>
      <Nav hide={isTrue} />
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
          <StyledDeleteButton>
            <PrimaryButton
              content="삭제하기"
              size="small"
              width="92px"
              onClick={() => {
                deleteAll(id);
                navigate('/');
              }}
            />
          </StyledDeleteButton>
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
  loading: eager;
`;

const StyledInWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledDeleteButton = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
`;
