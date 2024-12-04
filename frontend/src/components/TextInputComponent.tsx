import styled from "styled-components";
export interface TextInputProps {
    width: string;
    height: string;
}

const TextInputComponent = (props: TextInputProps) => {
    return <StyledTextInput $width={props.width} $height={props.height}></StyledTextInput>
}

interface InputProps {
    $width: string;
    $height: string;
}

const StyledTextInput = styled.input<InputProps>`
    margin: 5px;
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