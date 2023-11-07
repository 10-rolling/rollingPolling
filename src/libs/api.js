import axios from 'axios';
import { API_BASE_URL } from 'constants/common';

async function getProfileImg() {
  const response = await axios.get(`${API_BASE_URL}/profile-images/`);
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

export default getProfileImg;
