import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'components/Card/Card';
import EmptyCard from 'components/Card/EmptyCard';
import Nav from 'components/Nav/Nav';
import useColorToCode from 'hooks/useColorToCode';
import useUserInfo from 'hooks/useUserInfo';
import { getRecipient, getMessage } from 'libs/api';
import Modal from 'components/Modal/Modal';
import { dateFormat } from 'utils/dateFormat';
import styled from 'styled-components';
import { onTablet } from 'styles/mediaQuery';

function PostList() {
  const { id } = useParams();
  const { userInfo, setUserInfo, recentMessages, setRecentMessages } =
    useUserInfo();
  const { color, setColor } = useColorToCode();
  const [isImage, setIsImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);

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

  const onClickOpenModal = (id) => {
    recentMessages.map((data) => (id === data.id ? setModalData(data) : null));
    setShowModal(!showModal);
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
        {showModal && (
          <Modal
            open={showModal}
            setShowModal={setShowModal}
            img={modalData.profileImageURL}
            name={modalData.sender}
            date={dateFormat(modalData.createdAt)}
            category={modalData.relationship}
            content={modalData.content}
            font={modalData.font}
          />
        )}
        <StyledCardWrapper>
          <EmptyCard />
          {recentMessages.length > 0 &&
            recentMessages.map((item) => (
              <Card
                key={item.id}
                img={item.profileImageURL}
                name={item.sender}
                content={item.content}
                date={dateFormat(item.createdAt)}
                category={item.relationship}
                showModal={() => onClickOpenModal(item.id)}
                font={item.font}
              />
            ))}
        </StyledCardWrapper>
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
  height: 100vh;
  ${({ $isImage, $backgroundImg, $backgroundColor }) =>
    $isImage
      ? `background-image: url(${$backgroundImg})`
      : `background-color: ${$backgroundColor}`};

  background-repeat: no-repeat;
  background-size: cover;

  ${onTablet} {
    height: auto;
    padding: 90px 0;
  }
`;

const StyledCardWrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);

  ${onTablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
