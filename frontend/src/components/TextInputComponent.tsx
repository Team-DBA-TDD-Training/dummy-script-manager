import styled from "styled-components";

export interface TextInputProps {
  width: string;
  height: string;
  isBold?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextInputComponent = ({ onChange, ...rest }: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  $isBold?: boolean;
}

const StyledTextInput = styled.input<InputProps>`
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
  font-weight: ${(props) => props.$isBold ? 600 : 400};
`;

export default TextInputComponent;
