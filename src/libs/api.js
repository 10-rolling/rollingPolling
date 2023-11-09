import axios from 'axios';
import { API_BASE_URL } from 'constants/url';

const instance = axios.create({ baseURL: API_BASE_URL });

async function getProfileImg() {
  const response = await instance.get('/profile-images/');
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
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

async function getRecipient(id) {
  const response = await instance.get(`/1-10/recipients/${id}/`);
  const result = response.data;
  return result;
}

export { postMessage, getProfileImg, getRecipient };
