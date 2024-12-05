import styled from "styled-components";
export interface TextInputProps {
    width: string;
    height: string;
}

const TextAreaComponent = (props: TextInputProps) => {
    return <StyledTextInput $width={props.width} $height={props.height}></StyledTextInput>
}

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