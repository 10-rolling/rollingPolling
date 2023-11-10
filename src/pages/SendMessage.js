import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Dropdown from 'components/Dropdown/Dropdown';
import Editor from 'components/Editor/Editor';
import Input from 'components/Input/Input';
import Label from 'components/Label/Label';
import {
  DROPDOWN_FONT_DEFAULT,
  DROPDOWN_FONT_ITEMS,
  DROPDOWN_ITEMS_DEFAULT,
} from 'constants/dropdownItem';
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
import useCreateCheck from 'hooks/useCreateCheck';
import useInputName from 'hooks/useInputName';
import useNameCheck from 'hooks/useNameCheck';
import useProfileImg from 'hooks/useProfileImg';
import useRelationShip from 'hooks/useRelationShip';
import useSelectFont from 'hooks/useSelectFont';
import { postMessage } from 'libs/api';
import { styled } from 'styled-components';

function SendMessage() {
  const { id } = useParams();
  const { content } = useContent();
  const { selectFont } = useSelectFont();
  const { relationShip } = useRelationShip();
  const { nameCheck, setNameCheck } = useNameCheck();
  const { inputName, setInputName } = useInputName();
  const { profileImg, loadProfileImg } = useProfileImg();
  const { createCheck, checkContents } = useCreateCheck();
  const { changeProfileImg, setChangeProfileImg, cleanProfileImg } =
    useChangeProfileImg();

  const makeMessage = async () => {
    await postMessage(
      id,
      inputName,
      changeProfileImg,
      content,
      relationShip,
      selectFont
    );
  };

  useEffect(() => {
    loadProfileImg();
    return cleanProfileImg();
  }, []);

  useEffect(() => {
    checkContents(inputName, content);
  }, [inputName, content]);

  return (
    <StyledWrapper>
      {/* From. */}
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
          <StyledProfileImg src={changeProfileImg} alt="기본 이미지" />
          <StyledProfileImgWrapper>
            <Label content={PROFILE_SELECT} size="small" />
            <StyledImages>
              {profileImg.map((data) => (
                <StyledImage
                  key={data.id}
                  src={data.src}
                  onClick={setChangeProfileImg}
                />
              ))}
            </StyledImages>
          </StyledProfileImgWrapper>
        </StyledImgWrapper>
      </StyledInWrapper>
      {/* 상대와의 관계 */}
      <StyledInWrapper>
        <Label content={RELATIONSHIP} size="large" />
        <Dropdown placeholder={DROPDOWN_ITEMS_DEFAULT} />
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
          placeholder={DROPDOWN_FONT_DEFAULT}
        />
      </StyledInWrapper>
      {/* 생성하기 */}
      <StyledLink to={`/post/${id}`}>
        <PrimaryButton
          content={CREATE}
          size="large"
          width="100%"
          disabled={createCheck}
          onClick={makeMessage}
        />
      </StyledLink>
    </StyledWrapper>
  );
}

export default SendMessage;

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

const StyledProfileImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledImages = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledProfileImg = styled.img`
  width: 70px;
  border-radius: 100px;
`;

const StyledImage = styled.button`
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