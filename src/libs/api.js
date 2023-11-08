import axios from 'axios';

async function getBackgroundImg() {
  const response = await axios.get(
    'https://rolling-api.vercel.app/background-images/'
  );
  const result = response.data;
  const { imageUrls } = result;
  return imageUrls;
}

export { getBackgroundImg };
