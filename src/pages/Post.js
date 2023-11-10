import { useState } from 'react';

function Post() {
  const [showModal, setShowModal] = useState(false);

  const onClickOpenModal = () => {
    setShowModal(!showModal);
  };
  
  return;
}

export default Post;
