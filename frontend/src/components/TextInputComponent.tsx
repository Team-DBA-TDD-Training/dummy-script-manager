import styled from "styled-components";
export interface TextInputProps {
    width: string;
    height: string;
    placeholder?: string;
    value?: string
}

const TextInputComponent = (props: TextInputProps) => {
    return <StyledTextInput value={props.value} $width={props.width} $height={props.height} placeholder={props.placeholder!}></StyledTextInput>
}

interface InputProps {
    $width: string;
    $height: string;
}

const StyledTextInput = styled.input<InputProps>`
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
`;

export default TextInputComponent;