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

// /######################

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

async function addRecipients(param) {
  const url = `/recipients/`;
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const formData = new FormData();
  formData.append('name', param.name);
  formData.append('backgroundColor', param.backgroundColor);

  const response = await instance.post(url, formData, config);
  const result = response.data;
  console.log(result);
}

export { postMessage, getProfileImg, getBackgroundImg, addRecipients };
