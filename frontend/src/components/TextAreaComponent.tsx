import styled from "styled-components";

export interface TextInputProps {
  placeholder?: string;
  width: string;
  height: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextAreaComponent = (props: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <StyledTextInput
      placeholder={props.placeholder}
      onChange={handleChange}
      value={props.value}
      $width={props.width}
      $height={props.height}
    ></StyledTextInput>
  );
};

interface InputProps {
  $width: string;
  $height: string;
}

const StyledTextInput = styled.textarea<InputProps>`
  margin: 5px;
  padding: 5px;
  background-color: white;
  width: ${(props) => `${props.$width}`};
  height: ${(props) => `${props.$height}`};
  border-radius: 5px;
  color: black;
  box-shadow: none;
  border: 1px solid;
  border-color: #c2bfbf;
  font-size: 21px;
  resize: vertical;
`;

export default TextAreaComponent;
