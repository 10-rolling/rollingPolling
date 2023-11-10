import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Nav from 'components/Nav/Nav';
import PaperCategory from 'components/Text/PaperCategory';


function List() {
  return (
    <>
      <Nav />
      <PaperCategory title="인기 롤링 페이퍼" emogi="🔥" />
      <PaperCategory title="최근에 만든 롤링 페이퍼" emogi="⭐️" />
      <Link to="/post">
        <PrimaryButton size="large" content="나도 만들어보기" width="280px" />
      </Link>
    </>
  );
}

export default List;
