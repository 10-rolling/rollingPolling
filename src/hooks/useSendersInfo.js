import { useEffect, useState } from 'react';
import { getRecipientMessage } from 'libs/api';

function useSenderInfo({ id }) {
  const [name, setName] = useState();
  const [count, setCount] = useState(0);
  const [profileImages, setProfileImages] = useState([]);

  const messagesInfo = async () => {
    const result = await getRecipientMessage(id);
    setCount(result.messageCount);
    setName(result.name);
    const { recentMessages } = result;
    const newProfileImages = [];

    for (let i = 0; i < result.messageCount; i++) {
      if (i === 3) {
        const profileImageURL =
          'https://github.com/miniposi/Programmers/assets/52947668/53f0d2b1-db58-41b2-a5ec-bc879ec5e5b9';
        newProfileImages.push(profileImageURL);
        continue;
      }
      const profileImageURL = recentMessages[i]?.profileImageURL;
      newProfileImages.push(profileImageURL);
    }

    setProfileImages(newProfileImages);
  };

  useEffect(() => {
    messagesInfo();
  }, [id]);

  return { name, count, profileImages };
}

export default useSenderInfo;
