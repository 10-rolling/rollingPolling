import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Message from 'components/Message/Message';
import getProfileImg from 'libs/api';

function SendMessage() {
  const { id } = useParams();
  const [profileImages, setProfileImages] = useState([]);

  const profileImgInfo = async () => {
    const result = await getProfileImg();
    setProfileImages(result);
  };

  useEffect(() => {
    profileImgInfo();
  }, []);

  return <Message id={id} profileImages={profileImages} />;
}

export default SendMessage;
