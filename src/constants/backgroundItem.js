import blueImg from 'assets/images/post/bluePost.svg';
import greenImg from 'assets/images/post/greenPost.svg';
import mountainImg from 'assets/images/post/mountain.svg';
import orangeImg from 'assets/images/post/orangePost.svg';
import plainImg from 'assets/images/post/plain.svg';
import purpleImg from 'assets/images/post/purplePost.svg';
import theme from 'styles/theme';

const COLOR_BACKGROUNDS = [
  {
    id: 1,
    value: theme.colors.orange200,
    content: 'orange',
    alt: '주황색',
    src: orangeImg,
    checked: true,
  },
  {
    id: 2,
    value: theme.colors.purple200,
    content: 'purple',
    alt: '보라색',
    src: purpleImg,
  },
  {
    id: 3,
    value: theme.colors.blue200,
    content: 'blue',
    alt: '파란색',
    src: blueImg,
  },
  {
    id: 4,
    value: theme.colors.green200,
    content: 'green',
    alt: '초록색',
    src: greenImg,
  },
];

const IMAGE_BACKGROUNDS = [
  {
    id: 5,
    value: mountainImg,
    content: 'mountain',
    alt: '산',
    src: mountainImg,
    checked: true,
  },
  { id: 6, value: plainImg, content: 'plain', alt: '평야', src: plainImg },
  {
    id: 7,
    value: mountainImg,
    content: 'mountain',
    alt: '산',
    src: mountainImg,
  },
  { id: 8, value: plainImg, content: 'plain', alt: '평야', src: plainImg },
];

export { COLOR_BACKGROUNDS, IMAGE_BACKGROUNDS };
