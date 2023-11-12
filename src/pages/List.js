import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Nav from 'components/Nav/Nav';
import CardListSlider from 'components/Slider/CardListSlider';
import PaperCategory from 'components/Text/PaperCategory';
import { getRecipients } from 'libs/api';
import { Latest, Popular } from 'utils/sortData';
import styled from 'styled-components';

function List() {
  const [data, setData] = useState([]);

  const messagesInfo = async () => {
    const result = await getRecipients();
    setData(result.results);
  };

  const PopularData = Popular([...data]);
  const LatestData = Latest([...data]);

  useEffect(() => messagesInfo(), []);

  return (
    <>
      <Nav />
      <StyledWrapper>
        <PaperCategory title="인기 롤링 페이퍼" emogi="🔥" />
        <CardListSlider data={PopularData} />

        <PaperCategory title="최근에 만든 롤링 페이퍼" emogi="⭐️" />
        <CardListSlider data={LatestData} />

        <StyledBtnWrapper>
          <Link to="/post">
            <PrimaryButton
              size="large"
              content="나도 만들어보기"
              width="280px"
            />
          </Link>
        </StyledBtnWrapper>
      </StyledWrapper>
    </>
  );
}

export default List;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px 0px;
  gap: 30px;
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
