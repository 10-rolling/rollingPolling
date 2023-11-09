import Relation from 'components/Badge/Relation';
import PrimaryButton from 'components/Button/PrimaryButton';
import styled from 'styled-components';
import theme from 'styles/theme';

function Modal({ open, setShowModal, img, name, content, date, category, background, color }) {
  const onClickCloseBtn = () => {
    setShowModal(!open);
  };

  return (
    <StyledBg open={open}>
      <StyledWrapper>
        <StyledFromWrapper>
          <StyledFromInformWrapper>
            <StyledImgWrapper
              src={img}
              alt="프로필 이미지"
            />
            <StyledFromContentWrapper>
              <span>
                From. <StyledName>{name}</StyledName>
              </span>
              <Relation category={category} background={background} color={color} />
            </StyledFromContentWrapper>
          </StyledFromInformWrapper>
          <StyledDate>{date}</StyledDate>
        </StyledFromWrapper>
        <StyledLine></StyledLine>

        <StyledContentWraper>
          <StyledContent>{content}</StyledContent>
        </StyledContentWraper>

        <StyledBtnWrapper onClick={onClickCloseBtn}>
          <PrimaryButton size="small" width="120px" content="확인" />
        </StyledBtnWrapper>
      </StyledWrapper>
    </StyledBg>
  );
}

export default Modal;

const StyledBg = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const StyledWrapper = styled.div`
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 420px;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: ${theme.colors.white};
  padding: 25px;
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

const StyledContentWraper = styled.div`
  height: 190px;
  overflow-y: auto;
`;

const StyledContent = styled.div`
  color: rgba(74, 74, 74, 1);
  font-size: 1.1rem;
  line-height: 28px;
  letter-spacing: -0.01em;
`;

const StyledDate = styled.span`
  font-size: 0.75rem;
  color: rgba(153, 153, 153, 1);
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
