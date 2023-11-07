import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Dropdown from 'components/Dropdown/Dropdown';
import Editor from 'components/Editor/Editor';
import Input from 'components/Input/Input';
import Label from 'components/Label/Label';
import {
  DROPDOWN_FONT_ITEMS,
  FONT_ITEMS_PLACE_HOLDER,
} from 'constants/dropdownItem';
import {
  ENTER_CONTENT,
  FONT_SELECT,
  FROM,
  INPUT_NAME,
  PROFILE_IMG,
  PROFILE_SELECT,
  RELATIONSHIP,
} from 'constants/message';
import useChangeProfileImg from 'hooks/useChangeProfileImg';
import useContent from 'hooks/useContent';
import useInputName from 'hooks/useInputName';
import { styled } from 'styled-components';

function Message({ id, profileImages }) {
  const [isNameCheck, setIsNameCheck] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  const { profileImg, setProfileImg } = useChangeProfileImg();
  const { inputName, setInputName } = useInputName();
  const { content } = useContent();

  const checkValidation = (e) => {
    e.target.value === '' ? setIsNameCheck(true) : setIsNameCheck(false);
  };

  useEffect(() => {
    if (inputName.length !== 0 && content.length !== 0) {
      setIsCreate(false);
    }
  });

  return (
    <StyledWrapper>
      {/* From. 부분 */}
      <StyledWrapperIn>
        <Label content={FROM} size="large" />
        <Input
          placeholder={INPUT_NAME}
          $isError={isNameCheck}
          onBlur={checkValidation}
          onChange={setInputName}
        />
      </StyledWrapperIn>
      {/* 프로필 이미지 */}
      <StyledWrapperIn>
        <Label content={PROFILE_IMG} size="large" />
        <StyledImgWrapper>
          <StyledDefaultProfileImg src={profileImg} alt="기본 이미지" />
          <StyledImgWrapperIn>
            <Label content={PROFILE_SELECT} size="small" />
            <StyledImgWrapperSel>
              {profileImages.map((data) => (
                <StyledImgButton
                  key={data}
                  src={data}
                  onClick={setProfileImg}
                />
              ))}
            </StyledImgWrapperSel>
          </StyledImgWrapperIn>
        </StyledImgWrapper>
      </StyledWrapperIn>
      {/* 상대와의 관계 */}
      <StyledWrapperIn>
        <Label content={RELATIONSHIP} size="large" />
        <StyledDropDown />
      </StyledWrapperIn>
      {/* 내용을 입력해 주세요 */}
      <StyledWrapperIn>
        <Label content={ENTER_CONTENT} size="large" />
        <Editor />
      </StyledWrapperIn>
      {/* 폰트 선택 */}
      <StyledWrapperIn>
        <Label content={FONT_SELECT} size="large" />
        <StyledDropDown
          items={DROPDOWN_FONT_ITEMS}
          placeholder={FONT_ITEMS_PLACE_HOLDER}
        />
      </StyledWrapperIn>
      {/* 생성하기 */}
      <StyledLink to={`/post/${id}`}>
        <PrimaryButton size="large" width="100%" disabled={isCreate}>
          생성하기
        </PrimaryButton>
      </StyledLink>
    </StyledWrapper>
  );
}

export default Message;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 720px;
  margin: 0 auto;
  gap: 50px;
`;

const StyledWrapperIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const StyledImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledImgWrapperIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledImgWrapperSel = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledDefaultProfileImg = styled.img`
  width: 70px;
  border-radius: 100px;
`;

const StyledImgButton = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 100px;
  background-color: transparent;
  background-image: url(${(props) => props.src});
`;

const StyledDropDown = styled(Dropdown)`
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;
