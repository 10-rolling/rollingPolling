import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Dropdown from 'components/Dropdown/Dropdown';
import Editor from 'components/Editor/Editor';
import Input from 'components/Input/Input';
import Label from 'components/Label/Label';
import { DROPDOWN_FONT_ITEMS, DROPDOWN_ITEMS } from 'constants/dropdownItem';
import {
  CREATE,
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
import useNameCheck from 'hooks/useNameCheck';
import useRelationShip from 'hooks/useRealationShip';
import useSelectFont from 'hooks/useSelectFont';
import { postMessage } from 'libs/api';
import { styled } from 'styled-components';

function Message({ id, profileImages }) {
  const [isCreate, setIsCreate] = useState(true); // 이거 뭔가 hook으로 빼기가 어려워요 도와주세요.. 🥹
  const { nameCheck, setNameCheck } = useNameCheck();
  const { profileImg, setProfileImg } = useChangeProfileImg();
  const { inputName, setInputName, clearInputName } = useInputName();
  const { content, clearContent } = useContent();
  const { relationShip, clearRelationShip } = useRelationShip();
  const { selectFont, clearSelectFont } = useSelectFont();

  const post = async () => {
    await postMessage(
      id,
      inputName,
      profileImg,
      content,
      relationShip,
      selectFont
    );
    clearInputName;
    clearContent;
    clearRelationShip;
    clearSelectFont;
  };

  useEffect(() => {
    if (inputName.length !== 0 && content.length !== 0) {
      setIsCreate(false);
    }
  });

  return (
    <StyledWrapper>
      {/* From. 부분 */}
      <StyledInWrapper>
        <Label content={FROM} size="large" />
        <Input
          placeholder={INPUT_NAME}
          $isError={nameCheck}
          onBlur={setNameCheck}
          onChange={setInputName}
        />
      </StyledInWrapper>
      {/* 프로필 이미지 */}
      <StyledInWrapper>
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
      </StyledInWrapper>
      {/* 상대와의 관계 */}
      <StyledInWrapper>
        <Label content={RELATIONSHIP} size="large" />
        <Dropdown placeholder={DROPDOWN_ITEMS[0].content} />
      </StyledInWrapper>
      {/* 내용을 입력해 주세요 */}
      <StyledInWrapper>
        <Label content={ENTER_CONTENT} size="large" />
        <Editor />
      </StyledInWrapper>
      {/* 폰트 선택 */}
      <StyledInWrapper>
        <Label content={FONT_SELECT} size="large" />
        <Dropdown
          items={DROPDOWN_FONT_ITEMS}
          placeholder={DROPDOWN_FONT_ITEMS[0].content}
        />
      </StyledInWrapper>
      {/* 생성하기 */}
      <StyledLink to={`/post/${id}`}>
        <PrimaryButton
          content={CREATE}
          size="large"
          width="100%"
          disabled={isCreate}
          onClick={post}
        />
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

const StyledInWrapper = styled.div`
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

const StyledLink = styled(Link)`
  width: 100%;
`;
