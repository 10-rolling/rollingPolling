import { useParams } from 'react-router-dom';
import Message from 'components/Message/Message';

function SendMessage() {
  const { id } = useParams();

  return <Message id={id} />;
}

export default SendMessage;
