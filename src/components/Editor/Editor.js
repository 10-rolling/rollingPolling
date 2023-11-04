import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  return (
    <>
      <ReactQuill style={{ width: '720px', height: '260px' }} />
    </>
  );
}

export default Editor;
