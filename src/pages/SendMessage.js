import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import Nav from 'components/Nav/Nav';
import { styled } from 'styled-components';
import { onMobile, onTablet } from 'styles/mediaQuery';

function SendMessage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { content } = useContent();
  const { selectFont } = useSelectFont();
  const { relationShip } = useRelationShip();
  const { nameCheck, setNameCheck } = useNameCheck();
  const { inputName, setInputName } = useInputName();
  const { profileImg, loadProfileImg } = useProfileImg();
  const { createCheck, checkContents } = useCreateCheck();
  const { changeProfileImg, setChangeProfileImg } = useChangeProfileImg();

  const makeMessage = async () => {
    await postMessage(
      id,
      inputName,
      changeProfileImg,
      content,
      relationShip,
      selectFont
    );
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    loadProfileImg();
  }, []);

  useEffect(() => {
    checkContents(inputName, content);
  }, [inputName, content]);

  return (
    <>
      <Nav hide hideAll />
      <StyledWrapper>
        <StyledInWrapper>
          <Label content={FROM} size="large" />
          <Input
            placeholder={INPUT_NAME}
            $isError={nameCheck}
            onBlur={setNameCheck}
            onChange={setInputName}
          />
        </StyledInWrapper>
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
        <StyledInWrapper>
          <Label content={RELATIONSHIP} size="large" />
          <Dropdown placeholder={DROPDOWN_ITEMS_DEFAULT} />
        </StyledInWrapper>
        <StyledInWrapper>
          <Label content={ENTER_CONTENT} size="large" />
          <Editor />
        </StyledInWrapper>
        <StyledInWrapper>
          <Label content={FONT_SELECT} size="large" />
          <Dropdown
            items={DROPDOWN_FONT_ITEMS}
            placeholder={DROPDOWN_FONT_DEFAULT}
          />
        </StyledInWrapper>
        <StyledButtonWrapper>
          <PrimaryButton
            content={CREATE}
            size="large"
            width="100%"
            disabled={createCheck}
            onClick={makeMessage}
          />
        </StyledButtonWrapper>
      </StyledWrapper>
    </>
  );
}

export default SendMessage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 720px;
  height: auto;
  margin: 30px auto;
  gap: 50px;

  ${onTablet} {
    width: 100%;
    margin-top: 50px;
    padding-left: 22px;
    padding-right: 22px;
  }

  ${onMobile} {
    width: 320px;
    padding: 0;
  }
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
  flex-wrap: wrap;
  gap: 5px;

  ${onMobile} {
    gap: 2px;
  }
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  ${onMobile} {
    width: 40px;
    height: 40px;
  }
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  ${onMobile} {
    margin-top: 185px;
  }
`;
