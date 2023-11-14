import { create } from 'zustand';
import { getRecipientMessage } from 'libs/api';

const useMessagesInfo = create((set) => ({
  name: '',
  count: 0,
  profileImages: [],
  fetchMessagesInfo: async (id) => {
    const result = await getRecipientMessage(id);
    set(() => ({
      count: result.messageCount,
      name: result.name,
      profileImages: result.recentMessages
        .slice(0, 3)
        .map((message) => message.profileImageURL)
        .concat([
          'https://github.com/miniposi/Programmers/assets/52947668/53f0d2b1-db58-41b2-a5ec-bc879ec5e5b9',
        ]),
    }));
  },
}));

export default useMessagesInfo;
