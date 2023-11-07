import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from 'styled-components';

function Editor() {
  return (
    <>
      <EditorForm />
    </>
  );
}

export default Editor;

const EditorForm = styled(ReactQuill)`
  width: 720px;
  height: 260px;
  margin-bottom: 45px;
`;
