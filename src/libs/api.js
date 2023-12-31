import axios from 'axios';
import alert from 'utils/alert';
import {
  API_BASE_URL,
  MESSAGE_LIMIT_DEFAULT,
  MESSAGE_OFFSET_DEFAULT,
} from 'constants/url';

const instance = axios.create({ baseURL: API_BASE_URL });

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      alert(error.response.status);
    }
    return Promise.reject(error);
  }
);

async function getRecipients() {
  const response = await instance.get(`/1-10/recipients/`);
  const result = response.data;
  return result;
}

async function getProfileImg() {
  const response = await instance.get('/profile-images/');
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

async function getRecipientMessage(id) {
  const response = await instance.get(`/1-10/recipients/${id}/`);
  const result = response.data;
  return result;
}

async function getReactions(id) {
  const response = await instance.get(`/1-10/recipients/${id}/reactions/`);
  const result = response.data;
  const { results } = result;
  return results;
}

async function postReaction(id, emoji) {
  try {
    const response = await instance.post(`/1-10/recipients/${id}/reactions/`, {
      emoji: emoji,
      type: 'increase',
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function deleteMessage(id) {
  try {
    const response = await instance.delete(`/1-10/messages/${id}/`);
    const result = response.status;
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function deleteAll(id) {
  try {
    await instance.delete(`/1-10/recipients/${id}/`);
  } catch (error) {
    console.error(error);
  }
}

async function postMessage(
  id,
  inputName,
  profileImg,
  content,
  relationShip,
  selectFont
) {
  try {
    const response = await instance.post(`/1-10/recipients/${id}/messages/`, {
      sender: inputName,
      profileImageURL: profileImg,
      relationship: relationShip,
      content: content,
      font: selectFont,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

/** background Image 호출
 *
 * @returns {Array} imageUrls
 */
async function getBackgroundImg() {
  const response = await instance.get(`/background-images/`);
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

/** Post 생성
 *
 * @returns {object}
 */
async function createRecipient(param) {
  const { name, backgroundColor = 'beige', backgroundImageURL } = param;
  const url = `/1-10/recipients/s`;

  try {
    const response = await instance.post(url, {
      name: name,
      backgroundColor: backgroundColor,
      backgroundImageURL: backgroundImageURL,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function getRecipient(id) {
  const response = await instance.get(`/1-10/recipients/${id}/`);
  const result = response.data;
  return result;
}

async function getMessage(
  id,
  limit = MESSAGE_LIMIT_DEFAULT,
  offset = MESSAGE_OFFSET_DEFAULT
) {
  const query = `limit=${limit}&offset=${offset}`;
  const response = await instance.get(
    `/1-10/recipients/${id}/messages/?${query}`
  );
  const result = response.data;

  return result;
}

export {
  getRecipients,
  getProfileImg,
  getRecipientMessage,
  getReactions,
  postReaction,
  deleteMessage,
  deleteAll,
  postMessage,
  getBackgroundImg,
  createRecipient,
  getRecipient,
  getMessage,
};
