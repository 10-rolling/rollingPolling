import PrimaryButton from 'components/Button/PrimaryButton';
import Editor from 'components/Editor/Editor';
import Label from 'components/Label/Label';
import {
  ENTER_CONTENT,
  FROM,
  PROFILE_IMG,
  PROFILE_SELECT,
  RELATIONSHIP,
} from 'constants/message';
import { styled } from 'styled-components';

function Message({ profileImages }) {
  return (
    <StyledWrapper>
      {/* From. 부분 */}
      <StyledWrapperIn>
        <Label content={FROM} size="large" />
      </StyledWrapperIn>
      {/* 프로필 이미지 */}
      <StyledWrapperIn>
        <Label content={PROFILE_IMG} size="large" />
        <StyledImgWrapper>
          <Label content={PROFILE_SELECT} size="small" />
          <StyledImgWrapperIn>
            {profileImages.map((data) => (
              <StyledProfileImg key={data.id} src={data} />
            ))}
          </StyledImgWrapperIn>
        </StyledImgWrapper>
      </StyledWrapperIn>
      {/* 상대와의 관계 */}
      <Label content={RELATIONSHIP} size="large" />
      {/* 내용을 입력해 주세요 */}
      <StyledWrapperIn>
        <Label content={ENTER_CONTENT} size="large" />
        <Editor />
      </StyledWrapperIn>
      {/* 폰트 선택 */}
      {/* 생성하기 */}
      <PrimaryButton size="large" width="100%">
        생성하기
      </PrimaryButton>
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
`;

const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledImgWrapperIn = styled.div`
  display: flex;
`;

const StyledProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;
