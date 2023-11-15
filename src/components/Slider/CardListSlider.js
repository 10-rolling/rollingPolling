import { useState } from 'react';
import CardList from 'components/Card/CardList';
import arrowLeft from 'assets/icons/arrowleft.svg';
import arrowRight from 'assets/icons/arrowright.svg';
import styled from 'styled-components';
import { onPc } from 'styles/mediaQuery';

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
      {showLeftBtn ? (
        <StyledArrowWrapper>
          <img src={arrowLeft} alt="왼쪽 방향 화살표" onClick={toPrev} />
        </StyledArrowWrapper>
      ) : (
        <StyledNoneArrowWrapper></StyledNoneArrowWrapper>
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

      {showRightBtn ? (
        <StyledArrowWrapper>
          <img src={arrowRight} alt="오른쪽 방향 화살표" onClick={toNext} />
        </StyledArrowWrapper>
      ) : (
        <StyledNoneArrowWrapper></StyledNoneArrowWrapper>
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
  gap: 8px;
`;

const StyledNoneArrowWrapper = styled.div`
  min-width: 16px;
`;

const StyledDataWrapper = styled.div`
  max-width: 960px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${onPc} {
    overflow: hidden;
  }
`;

const StyledDataInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  max-width: 116rem;
`;

const StyledArrowWrapper = styled.div`
  z-index: -1;

  ${onPc} {
    display: flex;
    z-index: 1;
  }
`;
