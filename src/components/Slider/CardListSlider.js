import { useState } from 'react';
import CardList from 'components/Card/CardList';
import arrowLeft from 'assets/icons/arrowLeft.svg';
import arrowRight from 'assets/icons/arrowRight.svg';
import styled from 'styled-components';

function CardListSlider({ data }) {
  const [counter, setCounter] = useState(0);

  const toPrev = () => {
    setCounter(counter - 1);
  };

  const toNext = () => {
    setCounter(counter + 1);
  };

  const showLeftBtn = counter > 0;
  const showRightBtn = counter !== data.length - 4 && data.length > 4;

  return (
    <StyledWrapper>
      {showLeftBtn && (
        <img src={arrowLeft} alt="왼쪽 방향 화살표" onClick={toPrev} />
      )}
      <StyledDataWrapper>
        <StyledDataInWrapper
          style={{ transform: `translateX(-${25.5 * counter}%)` }}
        >
          {data.map((item) => (
            <CardList
              key={item.id}
              id={item.id}
              name={item.name}
              num={item.messageCount}
              color={item.backgroundColor}
              img={item?.backgroundImageURL}
              reactions={item.topReactions}
            />
          ))}
        </StyledDataInWrapper>
      </StyledDataWrapper>

      {showRightBtn && (
        <img src={arrowRight} alt="오른쪽 방향 화살표" onClick={toNext} />
      )}
    </StyledWrapper>
  );
}

export default CardListSlider;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledDataWrapper = styled.div`
  max-width: 960px;
  overflow: hidden;
`;

const StyledDataInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 116rem;

  gap: 20px;
  padding: 0 13px;
`;
