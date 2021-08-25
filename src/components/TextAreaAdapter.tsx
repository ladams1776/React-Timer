import React, { ReactChildren } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Field } from 'react-final-form';
interface AdapterProp {
  input: {
    onChange: (event: any) => void;
    value: string;
  };
}
interface TextAreaAdapterProp {
  name: string;
  subscription: any;
  children: ReactChildren;
}

export const Adapter: React.FC<AdapterProp> = ({ ...rest }) => {
  const { onChange, value } = rest.input;

  const toolbar = 'fullscreen | undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help';
  const plugins = ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'];


  return (
    <Editor
      data-test-id="text-area-adapter"
      test-dataid="textAreaAdapter"
      value={value}
      init={{
        height:'60vh',
        width: '100vw',
        menubar: true,
        plugins,
        toolbar,
      }}
      onEditorChange={onChange}
      {...rest}
    />
  );
};

const TextAreaAdapter: React.FC<TextAreaAdapterProp> = ({ subscription }) => {
  const comp = navigator.onLine ? (
    <Field name="description" subscription={subscription}>
      {({ ...rest }) => <Adapter {...rest} />}
    </Field>
  ) : (
    <Field name="description" subscription={subscription}>
      {({ ...rest }) => {
        const { onChange, value } = rest.input;
        return <textarea name="description" onChange={onChange} value={value} {...rest} />;
      }}
    </Field>
  );

  return comp;
};

export default TextAreaAdapter;
