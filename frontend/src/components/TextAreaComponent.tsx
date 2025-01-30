import styled from "styled-components";

export interface TextInputProps {
  placeholder?: string;
  width: string;
  height: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const TextAreaComponent = ({ onChange, ...rest }: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <StyledTextInput
      onChange={handleChange}
      {...rest}
    ></StyledTextInput>
  );
};

interface InputProps {
  width: string;
  height: string;
}

const StyledTextInput = styled.textarea<InputProps>`
  margin: 5px;
  padding: 5px;
  background-color: white;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  border-radius: 5px;
  color: black;
  box-shadow: none;
  border: 1px solid;
  border-color: #c2bfbf;
  font-size: 16px;
  resize: vertical;
`;

export default TextAreaComponent;
