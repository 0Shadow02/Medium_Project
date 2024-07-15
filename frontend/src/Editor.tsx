import JoditEditor from "jodit-react";
import { useRef } from "react";

interface EditorProps {
  value: string;
  onChange?: (newValue: string) => void;
  onBlur?: (newValue: string) => void;
}

export const MyEditor = ({ value, onBlur, onChange }: EditorProps) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};
