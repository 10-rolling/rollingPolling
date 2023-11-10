import axios from 'axios';
import { API_BASE_URL } from 'constants/url';

async function getProfileImg() {
  const instance = axios.create({ baseURL: API_BASE_URL });
  const response = await instance.get('/profile-images/');
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

async function getRecipientMessage(id) {
  const response = await axios.get(`${API_BASE_URL}/1-10/recipients/${id}/`);
  const result = response.data;
  return result;
}

async function getReactions(id) {
  const response = await axios.get(
    `${API_BASE_URL}/1-10/recipients/${id}/reactions/`
  );
  const result = response.data;
  const { results } = result;
  return results;
}

async function postReaction(id, emoji) {
  try {
    await axios.post(`${API_BASE_URL}/1-10/recipients/${id}/reactions/`, {
      emoji: emoji,
      type: 'increase',
    });
  } catch (error) {
    console.log(error);
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
    await instance.post(`/1-10/recipients/${id}/messages/`, {
      sender: inputName,
      profileImageURL: profileImg,
      relationship: relationShip,
      content: content,
      font: selectFont,
    });
  } catch (error) {
    console.log(error);
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
  const url = `/1-10/recipients/`;

  try {
    const response = await instance.post(url, {
      name: name,
      backgroundColor: backgroundColor,
      backgroundImageURL: backgroundImageURL,
    });
    const result = response.data;
    return result;
  } catch (error) {
    if (error.response) {
      throw error;
    } else {
      throw error;
    }
  }
}

export {
  getProfileImg,
  getRecipientMessage,
  getReactions,
  postReaction,
  postMessage,
  getBackgroundImg,
  createRecipient,
};
