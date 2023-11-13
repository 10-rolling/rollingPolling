import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import ToggleButton from 'components/Button/ToggleButton';
import Input from 'components/Input/Input';
import { COLOR_BACKGROUNDS } from 'constants/backgroundItem';
import useBackgroundImg from 'hooks/useBackgroundImg';
import useEmptyCheck from 'hooks/useEmptyCheck';
import useInputName from 'hooks/useInputName';
import useChangeBackgroundItem from 'hooks/useSetBackgroundItem';
import { createRecipient } from 'libs/api';
import Nav from 'components/Nav/Nav';
import CheckIcon from 'assets/icons/Check.svg';
import styled from 'styled-components';
import theme from 'styles/theme';
import { onMobile, onTablet } from 'styles/mediaQuery';

function Post() {
  const { inputName, setInputName } = useInputName();
  const { emptyCheck, setEmptyCheck, isValue, setIsValue } = useEmptyCheck();
  const { imageItems, loadBackgroundImg } = useBackgroundImg();
  const { backgroundItem, setBackgroundItem, checkedBackgroundItem } =
    useChangeBackgroundItem();
  const [paramType, setParamType] = useState(0);
  const navigate = useNavigate();

  const toggleHandle = (result) => {
    setBackgroundItem(result ? imageItems : COLOR_BACKGROUNDS);
    setParamType(result);
  };

  const checkInputValue = (e) => {
    setEmptyCheck(e.target.value);
    setIsValue(e.target.value);
  };

  const clickHandle = (checkedItem) => {
    checkedBackgroundItem(checkedItem);
  };

  const postToServer = async () => {
    const checkedItem = backgroundItem.find((item) => item.checked);
    const param = {
      name: inputName,
    };
    //이미지 와 컬러에 따라 파라미터 변경
    paramType === 1
      ? (param.backgroundImageURL = checkedItem.value)
      : (param.backgroundColor = checkedItem.value);

    await createRecipient(param).then((result) => {
      if (result?.id) {
        navigate(`/post/${result.id}`);
      }
    });
  };

  useEffect(() => {
    loadBackgroundImg();
  }, [emptyCheck]);

  return (
    <>
      <Nav hide={'none'} />
      <StyledPostForm>
        {/* 받는 사람 */}
        <StyledInWrapper>
          <StyledLabel>To.</StyledLabel>
          <Input
            placeholder="받는 사람 이름을 입력해주세요."
            $isError={!emptyCheck}
            onBlur={checkInputValue}
            errorMessage="값을 입력해주세요."
            onChange={setInputName}
          />
        </StyledInWrapper>
        {/* 배경화면 선택 */}
        <StyledInWrapper>
          <StyledLabel>배경화면을 선택해 주세요.</StyledLabel>
          <StyledSpan>
            컬러를선택하거나, 이미지를 선택할 수 있습니다.
          </StyledSpan>
        </StyledInWrapper>
        <ToggleButton onClick={toggleHandle} />
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
        <StyledButtonWrapper>
          <PrimaryButton
            size="large"
            width="100%"
            disabled={isValue}
            content={'생성하기'}
            onClick={postToServer}
          />
        </StyledButtonWrapper>
      </StyledPostForm>
    </>
  );
}

export default Post;

const StyledPostForm = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;

  width: 720px;
  height: 66px;

  ${onTablet} {
    width: 100%;
    padding: 0 24px;
  }

  ${onMobile} {
    width: 100%;
    padding: 0 20px;
  }
`;

const StyledInWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
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

const StyledBackgroundList = styled.div`
  display: flex;
  width: 100%;
  margin-top: 45px;
  gap: 30px;

  ${onTablet} {
    flex-wrap: wrap;
  }

  ${onMobile} {
    margin-top: 28px;
    gap: 12px;
  }
`;

const StyledBackgroundItem = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  cursor: pointer;

  ${onTablet} {
    width: 154px;
    height: 154px;
  }
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

const StyledButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 69px;

  ${onTablet} {
    margin-top: 210px;
    padding-bottom: 24px;
  }

  ${onMobile} {
    margin-top: 82px;
  }
`;
