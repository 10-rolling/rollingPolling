import axios from 'axios';
import { API_BASE_URL } from 'constants/url';

const URL = axios.create({ baseURL: API_BASE_URL });

async function getProfileImg() {
  const response = await URL.get('/profile-images/');
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
    await URL.post(`/1-10/recipients/${id}/messages/`, {
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

export default getProfileImg;
export { postMessage };
