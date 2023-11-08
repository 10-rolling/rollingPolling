import axios from 'axios';
import { API_BASE_URL } from 'constants/url';

async function getProfileImg() {
  const response = await axios.get(`${API_BASE_URL}/profile-images/`);
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

async function getRecipientMessage(id) {
  const response = await axios.get(
    `${API_BASE_URL}/1-10/recipients/${id}/messages/`
  );
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

export { getProfileImg, getRecipientMessage, getReactions, postReaction };
