import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import ToggleButton from 'components/Button/ToggleButton';
import Input from 'components/Input/Input';
import { COLOR_BACKGROUNDS } from 'constants/backgroundItem';
import useBackgroundImg from 'hooks/useBackgroundImg';
import useEmptyCheck from 'hooks/useEmptyCheck';
import useChangeBackgroundItem from 'hooks/useSetBackgroundItem';
import CheckIcon from 'assets/icons/Check.svg';
import styled from 'styled-components';
import theme from 'styles/theme';

function CreatePost() {
  const { emptyCheck, setEmptyCheck } = useEmptyCheck();
  const { imageItems, loadBackgroundImg } = useBackgroundImg();
  const { backgroundItem, setBackgroundItem, checkedBackgroundItem } =
    useChangeBackgroundItem();

  const toggleHandle = (result) => {
    setBackgroundItem(result ? imageItems : COLOR_BACKGROUNDS);
  };

  const checkInputValue = (e) => {
    setEmptyCheck(e.target.value);
  };

  const clickHandle = (checkedItem) => {
    checkedBackgroundItem(checkedItem);
  };
  useEffect(() => {
    loadBackgroundImg();
  }, [emptyCheck]);

  return (
    <StyledWrapper>
      <StyledPostForm>
        {/* 받는 사람 */}
        <StyledInWrapper>
          <StyledLabel>To.</StyledLabel>
          <Input
            placeholder="받는 사람 이름을 입력해주세요."
            $isError={!emptyCheck}
            onBlur={checkInputValue}
            errorMessage="값을 입력해주세요."
          />
        </StyledInWrapper>
        {/* 배경화면 선택 */}
        <StyledInWrapper>
          <StyledLabel>배경화면을 선택해 주세요.</StyledLabel>
          <StyledSpan>
            컬러를선택하거나, 이미지를 선택할 수 있습니다.
          </StyledSpan>
        </StyledInWrapper>
        <StyledToggleButton onClick={toggleHandle} />
        <StyledBackgroundList>
          {backgroundItem.map((item) => (
            <StyledBackgroundItem
              onClick={() => clickHandle(item)}
              key={item.id}
            >
              <StyledBackgroundImg src={item.src} checked={item.checked} />
              {item.checked && (
                <StyledChecked src={CheckIcon} alt="체크 표시" />
              )}
            </StyledBackgroundItem>
          ))}
        </StyledBackgroundList>
        <StyledLink to={`/post/id`}>
          <PrimaryButton
            size="large"
            width="100%"
            disabled={!emptyCheck}
            content={'생성하기'}
          />
        </StyledLink>
      </StyledPostForm>
    </StyledWrapper>
  );
}

export default CreatePost;

const StyledWrapper = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  background: ${theme.colors.white};
`;

const StyledPostForm = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 720px;
  height: 66px;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

const StyledInWrapper = styled.div`
  width: 100%;
  margin: 40px 0px;
`;

const StyledLabel = styled.p`
  font-size: 1.5rem;
  text-align: left;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.gray800};
  margin: 10px 0px;
`;

const StyledSpan = styled.span`
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.gray500};
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledToggleButton = styled(ToggleButton)`
  margin-top: 30px;
`;

const StyledBackgroundList = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin: 50px 0px;
`;

const StyledBackgroundItem = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  cursor: pointer;
`;

const StyledBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  ${({ checked }) => (checked ? 'filter: blur(2px)' : '')};
`;
const StyledChecked = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.7;
  width: 50px;
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  width: 100%;
`;
