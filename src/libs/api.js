import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app';

/** background Image 호출
 *
 * @returns {Array} imageUrls
 */
async function getBackgroundImg() {
  const response = await axios.get(`${BASE_URL}/background-images/`);
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

async function addRecipients(param) {
  const url = `${BASE_URL}/recipients/`;
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const formData = new FormData();
  formData.append('name', param.name);
  formData.append('backgroundColor', param.backgroundColor);

  const response = await axios.post(url, formData, config);
  const result = response.data;
  console.log(result);
}

export { getBackgroundImg, addRecipients };
