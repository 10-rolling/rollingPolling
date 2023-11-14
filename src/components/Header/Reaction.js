import { useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { getReactions, postReaction } from 'libs/api';
import Emoji from 'components/Badge/Emoji';
import useReactionToggleStore from 'hooks/useReactionToggleStore';
import useEmojiToggleStore from 'hooks/useEmojiToggleStore';
import OutlinedButton from 'components/Button/OutlinedButton';
import styled from 'styled-components';
import theme from 'styles/theme';
import arrowDown from 'assets/icons/arrowdown.svg';
import arrowUp from 'assets/icons/arrowUp.svg';
import add from 'assets/icons/add.svg';

function Reaction({ id }) {
  const { isOpen, toggleDropdown } = useReactionToggleStore();
  const { isEmojiOpen, emojiToggleDropdown, emojiCloseDropdown } =
    useEmojiToggleStore();
  const [reactionData, setReactionData] = useState([]);
  const [flag, setFlag] = useState(false);

  const reactionsInfo = async () => {
    const result = await getReactions(id);
    const sortedResult = result.sort((a, b) => b.count - a.count);
    setReactionData(sortedResult);
  };

  const post = async (id, emoji) => {
    await postReaction(id, emoji);
  };

  const emojiClick = (EmojiClickData) => {
    emojiCloseDropdown();

    post(id, EmojiClickData.emoji);
    setFlag(!flag);
  };

  useEffect(() => {
    reactionsInfo();
  }, [flag]);

  return (
    <StyledWrapper>
      <StyledReaction>
        {reactionData.slice(0, 3).map((item) => (
          <Emoji key={item.id} emoji={item.emoji} count={item.count} />
        ))}
      </StyledReaction>
      {isOpen && (
        <StyledDropdownMenu>
          {reactionData.slice(0, 6).map((item) => (
            <Emoji key={item.id} emoji={item.emoji} count={item.count} />
          ))}
        </StyledDropdownMenu>
      )}
      <StyledToggle>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="토글 버튼"
          onClick={() => {
            toggleDropdown();
          }}
        />
      </StyledToggle>
      <div
        onClick={() => {
          emojiToggleDropdown();
        }}
      >
        <OutlinedButton content="추가" width="100px" size="small" img={add} />
      </div>
      {isEmojiOpen && (
        <StyledEmojiPicker>
          <EmojiPicker height={350} width="100%" onEmojiClick={emojiClick} />
        </StyledEmojiPicker>
      )}
    </StyledWrapper>
  );
}

export default Reaction;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 5px;

  padding: 8px 0px;
  padding-right: 26px;
  justify-content: space-between;
  align-items: center;

  height: 52px;
`;

const StyledReaction = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const StyledToggle = styled.button`
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  border: 0;
  background-color: ${theme.colors.white};
`;

const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;

  display: grid;
  padding: 16px;
  grid-template-rows: repeat(2, 50px);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 4px;

  border: 1px solid ${theme.colors.gray300};
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px #00000014;

  background-color: ${theme.colors.white};

  list-style: none;
  z-index: 2;
`;

const StyledEmojiPicker = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  z-index: 2;
`;
