import { useLocation } from 'react-router-dom';
import Relation from 'components/Badge/Relation';
import OutlinedButton from 'components/Button/OutlinedButton';
import { dateFormat } from 'utils/dateFormat';
import { deleteMessage } from 'libs/api';
import useUserInfo from 'hooks/useUserInfo';
import { MESSAGE_DELETE_STATUS } from 'constants/url';
import deleted from 'assets/icons/deleted.svg';
import styled from 'styled-components';
import theme from 'styles/theme';
import { onTablet } from 'styles/mediaQuery';

function Card({ id, img, name, content, date, category, font, showModal }) {
  const location = useLocation();
  const { deleteMessages } = useUserInfo();

  const handleDelete = async (id) => {
    await deleteMessage(id).then((result) => {
      if (result === MESSAGE_DELETE_STATUS) {
        deleteMessages(id);
      }
    });
  };

  return (
    <StyledWrapper onClick={showModal}>
      <StyledFromWrapper>
        <StyledFromInformWrapper>
          <StyledImgWrapper src={img} alt="프로필 이미지" />
          <StyledFromContentWrapper>
            <span>
              From. <StyledName>{name}</StyledName>
            </span>
            <Relation category={category} />
          </StyledFromContentWrapper>
        </StyledFromInformWrapper>
        {location.pathname.endsWith('/edit') ? (
          <OutlinedButton
            size="small"
            img={deleted}
            width="40px"
            height="40px"
            onClick={() => {
              handleDelete(id);
            }}
          />
        ) : (
          ''
        )}
      </StyledFromWrapper>
      <StyledLine></StyledLine>
      <StyledContent font={font}>{content}</StyledContent>
      <StyledDate>{dateFormat(date)}</StyledDate>
    </StyledWrapper>
  );
}

export default Card;

const StyledWrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: ${theme.colors.white};
  padding: 25px;

  ${onTablet} {
    width: 352px;
    height: 284px;
  }
`;

const StyledFromWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledFromInformWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledImgWrapper = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px;
  object-fit: cover;
`;

const StyledFromContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledName = styled.strong`
  font-weight: ${theme.fontWeight.bold};
`;

const StyledLine = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 15px 0;
  height: 1px;
  background-color: rgba(238, 238, 238, 1);
`;

const StyledContent = styled.div`
  color: rgba(74, 74, 74, 1);
  font-size: 1.125rem;
  line-height: 28px;
  letter-spacing: -0.01em;
  font-family: ${(props) => props.font};
  font-style: normal;
`;

const StyledDate = styled.span`
  position: absolute;
  bottom: 0;
  font-size: 0.75rem;
  color: rgba(153, 153, 153, 1);
  margin-bottom: 25px;
`;
