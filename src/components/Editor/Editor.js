import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ENTER_CONTENT } from 'constants/message';
import useContent from 'hooks/useContent';
import { styled } from 'styled-components';

function Editor() {
  const { setContent } = useContent();
  return (
    <EditorForm>
      <CKEditor
        editor={ClassicEditor}
        config={{ placeholder: ENTER_CONTENT }}
        onChange={(event, editor) => {
          const data = editor.getData();
          const result = data.replace(/(<([^>]+)>)/gi, '');
          setContent(result);
        }}
      />
    </EditorForm>
  );
}

export default Editor;

const EditorForm = styled.div`
  .ck-editor__editable {
    height: 250px;
  }
`;
